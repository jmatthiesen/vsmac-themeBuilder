using System;
using System.Collections.Generic;
using Newtonsoft.Json;

namespace VSMThemeBuilder.Models
{
    public class ThemeConfig
    {
        [JsonProperty("elements", NullValueHandling = NullValueHandling.Ignore)]
        public List<string> Elements { get; set; }

        [JsonProperty("textElements", NullValueHandling = NullValueHandling.Ignore)]
        public List<string> TextElements { get; set; }
    }
}
