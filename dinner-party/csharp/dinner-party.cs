using System;
using System.Collections.Generic;

namespace Guests
{
    public class DinnerParty
    {
        public static List<Guest> AddGuests()
        {
            List<Guest> theseGuests = new List<Guest>();
            theseGuests.Add(new Guest("Marilyn Monroe", "entertainer", "(1926 - 1962) American actress, singer, model"));
            theseGuests.Add(new Guest("Abraham Lincoln", "politician", "(1809 - 1865) US President during American civil war"));
            theseGuests.Add(new Guest("Martin Luther King", "activist", "(1929 - 1968)  American civil rights campaigner"));
            theseGuests.Add(new Guest("Rosa Parks", "activist", "(1913 - 2005)  American civil rights activist"));
            theseGuests.Add(new Guest("Peter Sellers", "entertainer", "(1925 - 1980) British actor and comedian"));
            theseGuests.Add(new Guest("Alan Turing", "computer scientist", "(1912 - 1954) - British computing pioneer, Turing machine, algorithms, cryptology, computer architecture, saved the world"));
            theseGuests.Add(new Guest("Admiral Grace Hopper", "computer scientist", "(1906–1992) - developed early compilers: FLOW-Matic, COBOL; worked on UNIVAC; gave speeches on computer history, where she gave out nano-seconds"));
            theseGuests.Add(new Guest("Indira Gandhi", "politician", "(1917 - 1984) Prime Minister of India 1966 - 1977"));
            return theseGuests;
        }

        public static void GuestsByOccupation(List<Guest> theseGuests)
        {
            List<string> occupations = new List<string>();
            List<Guest> Table1 = new List<Guest>();
            List<Guest> Table2 = new List<Guest>();
            foreach (Guest guest in theseGuests)
            {
                if (!occupations.Contains(guest.occupation))
                {
                    occupations.Add(guest.occupation);
                    Table1.Add(guest);
                    Console.WriteLine("Table 1: " + guest.name, guest.occupation, guest.bio);
                }
                else
                {
                    Table2.Add(guest);
                    Console.WriteLine("Table 2: " + guest.name, guest.occupation, guest.bio);
                }
            }
        }
    }
    public class Guest
    {
        public Guest(string name, string occupaton, string bio)
        {
            this.name = name;
            this.occupation = occupaton;
            this.bio = bio;
        }
        public string name { get; set; }
        public string occupation { get; set; }

        public string bio { get; set; }
    }
}

