using System;

[assembly: AssemblyTitle("Sample Title")]
namespace Example
{
    /// <summary>Enterprisey Hello World</summary>
    public static class Hello                                           
    {
        public static void Main(string[] parameters)
        {
            OnWorldGreeted = () => Console.WriteLine("World was greeted");
            var hello = new HelloTextFactory();
            System.Console.WriteLine(hello);                            
            System.Console.WriteLine("You entered the following " +
                                     "{0} {1} command line arguments:", 
                                     parameters.Length, "cool");
            foreach (var t in parameters)                               
            {
                Console.WriteLine("{0}", t);
            }
            // TODO: Write unit tests!
            OnWorldGreeted();
        }

        public static event OnHelloEventHandler OnWorldGreeted;
    }

    public delegate void OnHelloEventHandler();

    public class HelloTextFactory : IHasHello<String>
    {
        private const string CONSTANT = "Hello, World!";
        public string Text { get; protected set; }
        private int _field = 1;
        public int AlsoAField { get; set; }

        public HelloTextFactory()
        {
            string local = "test";
            Text = CONSTANT;                        
            AlsoAField = _field;                    
            int mutableLocalVariable = 0;           
            int localVariable = 1;                  
            Text = "test".ExtensionMethod();        
            mutableLocalVariable += localVariable;
            mutableLocalVariable.ToString();        
            var x = AlsoAField.CompareTo(4 + 4);    
            dynamic thingy = new ExpandoObject();
            thingy.LateBoundIdentifier = @"Whee!";  
            Hello.OnWorldGreeted += () => "foo";    

           
            C.D referenceType = new C.D();                  // VS: User Types
            Func<Object> foo = () => "x";                   // VS: User Types (Delegates)
            Int32 valueType = new Int32();                  // VS: User Types (Value Types)
            Languages enumType = Languages.Ruby;            // VS: User Types (Enums)
            IHasHello<string> i = new HelloTextFactory();   // VS: User Types (Interfaces)
        }
    }

    #region More tests

    public enum Languages
    {
        English,
        Ruby,
        CSharp
    }

    public interface IHasHello<out TOfGreeting>
    {
        TOfGreeting Text { get; }
    }

    public class C
    {
        public class D
        {
        }
    }
    #endregion

    public static class SyntaxTestExtensions
    {
        public static string ExtensionMethod(this string parameter)
        {
            return parameter;
        }
    }
}
