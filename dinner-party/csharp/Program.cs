using System;
using Guests;


namespace csharp
{
    class Program
    {
        static void Main(string[] args)
        {
            var partyguests = DinnerParty.AddGuests();
            DinnerParty.GuestsByOccupation(partyguests);
        }
    }
}
