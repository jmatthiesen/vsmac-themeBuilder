// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.
//$(".CodeContainer span").click(function () {
//    alert("Clicked on themeable element: " + this.className);
//});

$(".colorPickerFG").on("input", function () {
    console.log("div.CodeContainer li span." + $(this).attr("id"));
    $("div.CodeContainer li span." + $(this).attr("id")).css("color", $(this).val());
});

$(".colorPickerBG").on("input", function () {
	console.log("div.CodeContainer li span." + $(this).attr("id"));
	$("div.CodeContainer li span." + $(this).attr("id")).css("background-color", $(this).val());
});

function downloadObjectAsJson(exportObj, exportName) {
	var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj, null, 4));
	var downloadAnchorNode = document.createElement('a');
	downloadAnchorNode.setAttribute("href", dataStr);
	downloadAnchorNode.setAttribute("download", exportName + ".json");
	document.body.appendChild(downloadAnchorNode);
	downloadAnchorNode.click();
	downloadAnchorNode.remove();
}

$("#btnDownload").click(function () {

	var keywordColor = $("#Keyword.colorPicker").val();
	var stringColor = $(".colorPicker #StringLiteral").val();
	var typeColor = $(".colorPicker #Keyword").val();
	var methodColor = $(".colorPicker #InferredIdentifier").val();

	var theme = {
		name: "VSMBuilderTheme",
		version: "1.0",
		description: "Custom theme created with VSMThemeBuilder",
		originator: "Me",

		palette: [
			{ name: "keyword", value: keywordColor },
			{ name: "text-black", value: "#222222" },
			{ name: "background-white", value: "white" },
			{ name: "comment-green", value: "#008000" },
			{ name: "local-blue", value: "#1f377f" },
			{ name: "string-red", value: stringColor },
			{ name: "keyword-purple", value: "#8f08c4" },
			{ name: "semantic-type", value: typeColor },
			{ name: "method", value: methodColor }
		],

		colors: [
			{ name: "Background(Read Only)", color: "white" },

			{ name: "Underline(Error)", color: "#FF0000" },
			{ name: "Underline(Warning)", color: "comment-green" },

			{ name: "Quick Diff(Dirty)", color: "yellow" },
			{ name: "Quick Diff(Changed)", color: "green" },

			{ name: "Indicator Margin", color: "#f6f6f6" },
			{ name: "Indicator Margin(Separator)", color: "#f6f6f6" },

			{ name: "Message Bubble Warning IconMargin", color: "#e68100", "bordercolor": "#e68100" },

			{ name: "Brace Matching(Rectangle)", color: "#DBE0CC", "secondcolor": "#DBE0CC" },
			{ name: "Usages(Rectangle)", color: "#DBE0CC", "secondcolor": "#DBE0CC", "bordercolor": "#E2E6E6" },
			{ name: "Changing usages(Rectangle)", color: "#DBE0CC", "secondcolor": "#DBE0CC", "bordercolor": "#DBE0CC" },
			{ name: "Primary Link(Highlighted)", color: "#B2EFB0" },

			{ name: "Search result background", color: "#F6B94D" },

			{ name: "Link Color", color: "keyword" },
			{ name: "Link Color(Active)", color: "keyword" }
		],

		text: [
			{ name: "Plain Text", "fore": "text-black", "back": "background-white" },
			{ name: "Selected Text", "back": "#94c4ec" },
			{ name: "Selected Text(Inactive)", "back": "#e5ebf1" },

			{ name: "Collapsed Text", "fore": "#808080", "back": "background-white" },

			{ name: "Line Numbers", "fore": "#2886A2", "back": "background-white" },

			{ name: "Punctuation", "fore": "text-black" },
			{ name: "Punctuation(Brackets)", "fore": "text-black" },

			{ name: "Comment(Line)", "fore": "comment-green" },
			{ name: "Comment(Block)", "fore": "comment-green" },
			{ name: "Comment(Doc)", "fore": "comment-green" },
			{ name: "Comment(DocTag)", "fore": "comment-green" },
			{ name: "Comment Tag", "fore": "#b901b9" },

			{ name: "Excluded Code", "fore": "#808080" },

			{ name: "String", "fore": "string-red" },
			{ name: "String(Escape)", "fore": "#b776fb" },
			{ name: "String(C# @ Verbatim)", "fore": "string-red" },

			{ name: "Number", "fore": "text-black" },

			{ name: "Preprocessor", "fore": "#808080" },
			{ name: "Preprocessor(Region Name)", "fore": "text-black" },

			{ name: "Xml Delimiter", "fore": "keyword" },
			{ name: "Xml Name", "fore": "#a31515" },
			{ name: "Xml Attribute", "fore": "#FF0000" },
			{ name: "Xml Attribute Quotes", "fore": "text-black" },
			{ name: "Xml Attribute Value", "fore": "keyword" },
			{ name: "Xml Comment", "fore": "#008000" },
			{ name: "Xml CData Section", "fore": "#808080" },

			{ name: "Xaml Delimiter", "fore": "keyword" },
			{ name: "Xaml Name", "fore": "#a31515" },
			{ name: "Xaml Attribute", "fore": "#FF0000" },
			{ name: "Xaml Attribute Quotes", "fore": "text-black" },
			{ name: "Xaml Attribute Value", "fore": "keyword" },
			{ name: "Xaml Comment", "fore": "#008000" },
			{ name: "Xaml CData Section", "fore": "#808080" },

			{ name: "Html Attribute Name", "fore": "#FF0000" },
			{ name: "Html Attribute Value", "fore": "keyword" },
			{ name: "Html Comment", "fore": "#006400" },
			{ name: "Html Element Name", "fore": "#800000" },
			{ name: "Html Entity", "fore": "#FF0000" },
			{ name: "Html Operator", "fore": "keyword" },
			{ name: "Html Server-Side Script", "fore": "text-black", "back": "#FFFF00" },
			{ name: "Html Tag Delimiter", "fore": "keyword" },
			{ name: "Razor Code", "back": "#e5e5e5" },

			{ name: "Keyword(Access)", "fore": "keyword" },
			{ name: "Keyword(Type)", "fore": "keyword" },
			{ name: "Keyword(Operator)", "fore": "keyword" },
			{ name: "Keyword(Selection)", "fore": "keyword" },
			{ name: "Keyword(Iteration)", "fore": "keyword" },
			{ name: "Keyword(Jump)", "fore": "keyword" },
			{ name: "Keyword(Context)", "fore": "keyword" },
			{ name: "Keyword(Exception)", "fore": "keyword" },
			{ name: "Keyword(Modifiers)", "fore": "keyword" },
			{ name: "Keyword(Constants)", "fore": "keyword" },
			{ name: "Keyword(Void)", "fore": "keyword" },
			{ name: "Keyword(Namespace)", "fore": "keyword" },
			{ name: "Keyword(Property)", "fore": "keyword" },
			{ name: "Keyword(Declaration)", "fore": "keyword" },
			{ name: "Keyword(Parameter)", "fore": "keyword" },
			{ name: "Keyword(Operator Declaration)", "fore": "keyword" },
			{ name: "Keyword(Other)", "fore": "keyword" },

			{ name: "User Types", "fore": "semantic-type" },
			{ name: "User Types(Enums)", "fore": "semantic-type" },
			{ name: "User Types(Interfaces)", "fore": "semantic-type" },
			{ name: "User Types(Delegates)", "fore": "semantic-type" },
			{ name: "User Types(Value types)", "fore": "semantic-type" },
			{ name: "User Types(Type parameters)", "fore": "semantic-type" },

			{ name: "User Field Usage", "fore": "text-black" },
			{ name: "User Field Declaration", "fore": "text-black" },

			{ name: "User Property Usage", "fore": "text-black" },
			{ name: "User Property Declaration", "fore": "text-black" },

			{ name: "User Event Usage", "fore": "text-black" },
			{ name: "User Event Declaration", "fore": "text-black" },

			{ name: "User Method Usage", "fore": "method" },
			{ name: "User Method Declaration", "fore": "method" },

			{ name: "User Parameter Usage", "fore": "local-blue" },
			{ name: "User Parameter Declaration", "fore": "local-blue" },

			{ name: "User Variable Usage", "fore": "local-blue" },
			{ name: "User Variable Declaration", "fore": "local-blue" },

			{ name: "Syntax Error", "fore": "#FF0000" },

			{ name: "Breakpoint Text", "fore": "text-black", "back": "#963945" },

			{ name: "Debugger Current Statement", "fore": "text-black", "back": "#FFEE61" },

			{ name: "Css Comment", "fore": "#006400" },
			{ name: "Css Property Name", "fore": "#FF0000" },
			{ name: "Css Property Value", "fore": "keyword" },
			{ name: "Css Selector", "fore": "#800000" },
			{ name: "Css String Value", "fore": "keyword" },
			{ name: "Css Keyword", "fore": "keyword" },

			{ name: "Script Comment", "fore": "comment-green" },
			{ name: "Script Keyword", "fore": "keyword" },

			{ name: "Tooltip Text", "fore": "text-black", "back": "#fafae3" },

			{ name: "String(Regex Alternation)", "fore": "#05C3BA" },
			{ name: "String(Regex Anchor)", "fore": "#FF00C1" },
			{ name: "String(Regex Character Class)", "fore": "#0073FF" },
			{ name: "String(Regex Comments)", "fore": "comment-green" },
			{ name: "String(Regex Grouping Constructs)", "fore": "#05C3BA" },
			{ name: "String(Regex Alt Escape Character)", "fore": "#9E5B71" },
			{ name: "String(Regex Quantifier)", "fore": "#FF00C1" },
			{ name: "String(Regex Self Escaped Character)", "fore": "#800000" },
			{ name: "String(Regex Text)", "fore": "#800000" },

			{ name: "extension method name", "fore": "method" },
			{ name: "keyword - control", "fore": "keyword-purple" },
			{ name: "operator - overloaded", "fore": "method" }
		]
	};

	downloadObjectAsJson(theme, "theme");
});

$(function () {
	$('[data-toggle="tooltip"]').tooltip()
})