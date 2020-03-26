using System;
using Xunit;

namespace PreviewGeneratorTests
{
    public class UnitTest1
    {
        [Fact]
        public async void GeneratorOutputsHtml()
        {
            string source = @"using System;
            namespace MyNamespace {
                public class MyClass {}
            }";
            string expected = @"<span class='keyword'>using</span> <span class='identifier'>System</span>;<br/>
            <span class='keyword'>namespace</span> <span class='namespace-name'>MyNamespace</span>
            {<br/>
                <span class='keyword'>public</span> <span class='keyword'>class</span> <span class='class-name'>MyClass</span> {}<br/>
            }";;
            
            PreviewGenerator generator = new PreviewGenerator();
            string preview = await generator.CreatePreviewFromSource(source);
            
            Assert.Equal(expected, preview);
        }
    }
}