using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Levaro.CSharp.Display.Renderers;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using VSMThemeBuilder.Models;
using VSMThemeBuilder.Utilities;
using System.Text.RegularExpressions;

namespace VSMThemeBuilder.Pages
{
    public class IndexModel : PageModel
    {
        private readonly ILogger<IndexModel> _logger;
        private readonly IWebHostEnvironment _webHostEnvironment;

        public string CSharpSampleHtml { get; set; }
        public List<string> Scopes { get; set; } = new List<string>();

        public IndexModel(ILogger<IndexModel> logger, IWebHostEnvironment webHostEnvironment)
        {
            _logger = logger;
            _webHostEnvironment = webHostEnvironment;
        }

        public void OnGet()
        {
            Scopes.Clear();

            HtmlRenderer renderer = new HtmlRenderer
            {
                IncludeLineNumbers = true,
                AlternateLines = false,
                IncludeDebugInfo = true
            };

            renderer.TransformHTMLClassName = roslynName => GetClassificatioName(roslynName);

            string pathToTemplate = Path.Combine(_webHostEnvironment.ContentRootPath, "Templates/CSharpSample.cs");
            CSharpSampleHtml = renderer.Render(System.IO.File.ReadAllText(pathToTemplate));

            //string pathToJson = Path.Combine(_webHostEnvironment.ContentRootPath, "Config/config.json");
            //var themeConfig = JsonConvert.DeserializeObject<ThemeConfig>(System.IO.File.ReadAllText(pathToJson));

            //foreach(var scope in themeConfig.TextElements)
            //{
            //    Scopes.Add(scope);
            //}
        }

        string GetClassificatioName(string name)
        {
            string classificationName = string.Empty;

            List<(string,string)> matches = ThemeToClassification.Map.Where(x => x.Item1.Equals(name, StringComparison.InvariantCultureIgnoreCase)).ToList();

            if(matches.Any())
            {
                classificationName = matches.First().Item2;

                string sanatizedName = SanitizeClassName(classificationName);
                if(!Scopes.Contains(sanatizedName))
                    Scopes.Add(sanatizedName);
            }
            else
            {
                if(!string.IsNullOrEmpty(name))
                    Debug.WriteLine($"No matching classification name for {name}");
            }

            return classificationName;
        }
        
        private string SanitizeClassName(string raw)
        {
            return Regex
                .Replace(raw ?? string.Empty, @"\s+", "")
                .Replace("(","-")
                .Replace(")", "");
        }
    }
}