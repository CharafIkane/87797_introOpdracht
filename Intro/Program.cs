public class Student
{
    string id;
    string volledigeNaam;
    public static void Main(string[] args)
    {
        Student s1 = new Student();
        Console.WriteLine("Welkom op de C# pagina van Charaf");
        Console.WriteLine("Wat is jouw naam?");
        s1.volledigeNaam = Console.ReadLine();
        Console.Write("Hallo " + s1.volledigeNaam + ", ");
        Console.WriteLine("Wat is uw studentnummer?");
        s1.id = Console.ReadLine();
        Console.WriteLine("Herhaal uw studentnummer");
        string herhaal = Console.ReadLine();
        if (s1.id.Equals(herhaal))
        {
            Console.WriteLine("Uw studentnummer is correct!");
        }
        else
        {
            Console.WriteLine("Uw studentnummer is verkeerd ingevoerd");
        }
        Console.ReadLine();
    }
}

