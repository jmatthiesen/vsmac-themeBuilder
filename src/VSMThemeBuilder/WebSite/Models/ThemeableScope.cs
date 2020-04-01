using System.Drawing;
using Newtonsoft.Json;

namespace VSMThemeBuilder.Models
{
    public class ThemeableScope
    {
        [JsonProperty("classificationName", NullValueHandling = NullValueHandling.Ignore)]
        public string ClassificationName { get; set; }

        [JsonProperty("color", NullValueHandling = NullValueHandling.Ignore)]
        public Color Color { get; set; }
    }
}