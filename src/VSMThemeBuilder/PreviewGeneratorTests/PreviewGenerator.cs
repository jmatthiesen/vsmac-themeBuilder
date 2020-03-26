using Microsoft.CodeAnalysis;
using Microsoft.CodeAnalysis.Classification;
using Microsoft.CodeAnalysis.Formatting;
using Microsoft.CodeAnalysis.Text;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PreviewGeneratorTests
{
    public class PreviewGenerator
    {
        // public async Task<IEnumerable<Range>> Classify(Document document, SourceText text)
        // {
        //     var span = TextSpan.FromBounds(0, text.Length);
        //
        //     IEnumerable<ClassifiedSpan> classifiedSpans = null;
        //     try
        //     {
        //         classifiedSpans = await Classifier.GetClassifiedSpansAsync(document, span);
        //     }
        //     catch (Exception ex)
        //     {
        //         Log.Exception(ex, "Exception during Classification of document: " + document.FilePath);
        //         return Array.Empty<Range>();
        //     }
        //
        //     // Roslyn 3.0.0 introduced `Symbol - Static` as an "additive" classification, meaning that multiple
        //     // classified spans will be emitted for the same TextSpan. This will filter our those classified spans
        //     // since they are "extra" information and do not represent the identifier type. This filter can be
        //     // removed after taking Roslyn 3.1.0 as the classifier will filter before returning classified spans.
        //     var ranges = classifiedSpans.Where(classifiedSpan => 
        //             classifiedSpan.ClassificationType != ClassificationTypeNames.StaticSymbol &&
        //             classifiedSpan.ClassificationType != ClassificationTypeNames.StringEscapeCharacter &&
        //             !classifiedSpan.ClassificationType.StartsWith("regex"))
        //         .Select(classifiedSpan =>
        //             new Range
        //             {
        //                 ClassifiedSpan = classifiedSpan,
        //                 Text = text.GetSubText(classifiedSpan.TextSpan).ToString()
        //             });
        //     ranges = Merge(text, ranges);
        //     ranges = FilterByClassification(ranges);
        //     ranges = FillGaps(text, ranges);
        //     return ranges;
        // }
        public async Task<string> CreatePreviewFromSource(string source)
        {
            Workspace workspace = new AdhocWorkspace();
            Solution sln = workspace.CurrentSolution;
            Project proj = sln.AddProject("preview", "outputAssembly", LanguageNames.CSharp);
            Document doc = proj.AddDocument("preview.cs", source);

            doc = await Formatter.FormatAsync(doc);
            SourceText text = await doc.GetTextAsync();

            IEnumerable<ClassifiedSpan> classifiedSpans = await Classifier.GetClassifiedSpansAsync(doc, TextSpan.FromBounds(0, text.Length));
            var ranges = classifiedSpans
                .Where(classifiedSpan =>
                    classifiedSpan.ClassificationType != ClassificationTypeNames.Punctuation)
                .Select(classifiedSpan => new ClassifiedRange
                {
                    ClassifiedSpan = classifiedSpan,
                    Text = text.GetSubText(classifiedSpan.TextSpan).ToString()
                });
            
            return text.ToString();
        }

        private class ClassifiedRange
        {
            public ClassifiedSpan ClassifiedSpan { get; set; }
            public string Text { get; set; }

            public ClassifiedRange()
            {
            }
        }
    }
}