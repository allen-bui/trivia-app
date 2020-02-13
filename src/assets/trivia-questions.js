const questions = [
  {
    "category": "General Knowledge",
    "type": "multiple",
    "difficulty": "easy",
    "question": "Virgin Trains, Virgin Atlantic and Virgin Racing, are all companies owned by which famous entrepreneur?   ",
    "correct_answer": "Richard Branson",
    "incorrect_answers": ["Alan Sugar", "Donald Trump", "Bill Gates"]
  },
  {
    "category": "General Knowledge",
    "type": "multiple",
    "difficulty": "easy",
    "question": "Which company did Valve cooperate with in the creation of the Vive?",
    "correct_answer": "HTC",
    "incorrect_answers": ["Oculus", "Google", "Razer"]
  },
  {
    "category": "General Knowledge",
    "type": "multiple",
    "difficulty": "easy",
    "question": "What is the most common surname Wales?",
    "correct_answer": "Jones",
    "incorrect_answers": ["Williams", "Davies", "Evans"]
  },
  {
    "category": "General Knowledge",
    "type": "multiple",
    "difficulty": "easy",
    "question": "What was the name of the WWF professional wrestling tag team made up of the wrestlers Ax and Smash?",
    "correct_answer": "Demolition",
    "incorrect_answers": [
      "The Dream Team",
      "The Bushwhackers",
      "The British Bulldogs"
    ]
  },
  {
    "category": "General Knowledge",
    "type": "multiple",
    "difficulty": "easy",
    "question": "In the video-game franchise Kingdom Hearts, the main protagonist, carries a weapon with what shape?",
    "correct_answer": "Key",
    "incorrect_answers": ["Sword", "Pen", "Cellphone"]
  },
  {
    "category": "General Knowledge",
    "type": "multiple",
    "difficulty": "easy",
    "question": "What does a funambulist walk on?",
    "correct_answer": "A Tight Rope",
    "incorrect_answers": ["Broken Glass", "Balls", "The Moon"]
  },
  {
    "category": "General Knowledge",
    "type": "multiple",
    "difficulty": "easy",
    "question": "In past times, what would a gentleman keep in his fob pocket?",
    "correct_answer": "Watch",
    "incorrect_answers": ["Money", "Keys", "Notebook"]
  },
  {
    "category": "General Knowledge",
    "type": "multiple",
    "difficulty": "easy",
    "question": "Area 51 is located in which US state?",
    "correct_answer": "Nevada",
    "incorrect_answers": ["Arizona", "New Mexico", "Utah"]
  },
  {
    "category": "General Knowledge",
    "type": "multiple",
    "difficulty": "easy",
    "question": "What is the largest organ of the human body?",
    "correct_answer": "Skin",
    "incorrect_answers": ["Heart", "large Intestine", "Liver"]
  },
  {
    "category": "General Knowledge",
    "type": "multiple",
    "difficulty": "easy",
    "question": "What word represents the letter 'T' in the NATO phonetic alphabet?",
    "correct_answer": "Tango",
    "incorrect_answers": ["Target", "Taxi", "Turkey"]
  },
  {
    "category": "General Knowledge",
    "type": "multiple",
    "difficulty": "easy",
    "question": "What alcoholic drink is made from molasses?",
    "correct_answer": "Rum",
    "incorrect_answers": ["Gin", "Vodka", "Whisky"]
  },
  {
    "category": "General Knowledge",
    "type": "multiple",
    "difficulty": "easy",
    "question": "Which American president appears on a one dollar bill?",
    "correct_answer": "George Washington",
    "incorrect_answers": [
      "Thomas Jefferson",
      "Abraham Lincoln",
      "Benjamin Franklin"
    ]
  },
  {
    "category": "General Knowledge",
    "type": "multiple",
    "difficulty": "easy",
    "question": "What is 'dabbing'?",
    "correct_answer": "A dance",
    "incorrect_answers": ["A medical procedure", "A sport", "A language"]
  },
  {
    "category": "General Knowledge",
    "type": "multiple",
    "difficulty": "easy",
    "question": "What is the shape of the toy invented by Hungarian professor Ernő Rubik?",
    "correct_answer": "Cube",
    "incorrect_answers": ["Sphere", "Cylinder", "Pyramid"]
  },
  {
    "category": "General Knowledge",
    "type": "multiple",
    "difficulty": "easy",
    "question": "What is the name of the Jewish New Year?",
    "correct_answer": "Rosh Hashanah",
    "incorrect_answers": ["Elul", "New Year", "Succoss"]
  },
  {
    "category": "General Knowledge",
    "type": "multiple",
    "difficulty": "easy",
    "question": "Which one of the following rhythm games was made by Harmonix?",
    "correct_answer": "Rock Band",
    "incorrect_answers": [
      "Meat Beat Mania",
      "Guitar Hero Live",
      "Dance Dance Revolution"
    ]
  },
  {
    "category": "General Knowledge",
    "type": "multiple",
    "difficulty": "easy",
    "question": "How many colors are there in a rainbow?",
    "correct_answer": "7",
    "incorrect_answers": ["8", "9", "10"]
  },
  {
    "category": "General Knowledge",
    "type": "multiple",
    "difficulty": "easy",
    "question": "Red Vines is a brand of what type of candy?",
    "correct_answer": "Licorice",
    "incorrect_answers": ["Lollipop", "Chocolate", "Bubblegum"]
  },
  {
    "category": "General Knowledge",
    "type": "multiple",
    "difficulty": "easy",
    "question": "What is the nickname of the US state of California?",
    "correct_answer": "Golden State",
    "incorrect_answers": ["Sunshine State", "Bay State", "Treasure State"]
  },
  {
    "category": "General Knowledge",
    "type": "multiple",
    "difficulty": "easy",
    "question": "What is on display in the Madame Tussaud's museum in London?",
    "correct_answer": "Wax sculptures",
    "incorrect_answers": [
      "Designer clothing",
      "Unreleased film reels",
      "Vintage cars"
    ]
  },
  {
    "category": "General Knowledge",
    "type": "multiple",
    "difficulty": "easy",
    "question": "What was the nickname given to the Hughes H-4 Hercules, a heavy transport flying boat which achieved flight in 1947?",
    "correct_answer": "Spruce Goose",
    "incorrect_answers": ["Noah's Ark", "Fat Man", "Trojan Horse"]
  },
  {
    "category": "General Knowledge",
    "type": "multiple",
    "difficulty": "easy",
    "question": "Which of these colours is NOT featured in the logo for Google?",
    "correct_answer": "Pink",
    "incorrect_answers": ["Yellow", "Blue", "Green"]
  },
  {
    "category": "General Knowledge",
    "type": "multiple",
    "difficulty": "easy",
    "question": "Five dollars is worth how many nickles?",
    "correct_answer": "100",
    "incorrect_answers": ["50", "25", "69"]
  },
  {
    "category": "General Knowledge",
    "type": "multiple",
    "difficulty": "easy",
    "question": "Who is depicted on the US hundred dollar bill?",
    "correct_answer": "Benjamin Franklin",
    "incorrect_answers": [
      "George Washington",
      "Abraham Lincoln",
      "Thomas Jefferson"
    ]
  },
  {
    "category": "General Knowledge",
    "type": "multiple",
    "difficulty": "easy",
    "question": "What do the letters in the GMT time zone stand for?",
    "correct_answer": "Greenwich Mean Time",
    "incorrect_answers": [
      "Global Meridian Time",
      "General Median Time",
      "Glasgow Man Time"
    ]
  },
  {
    "category": "General Knowledge",
    "type": "multiple",
    "difficulty": "easy",
    "question": "Which one of these is not a typical European sword design?",
    "correct_answer": "Scimitar",
    "incorrect_answers": ["Falchion", "Ulfberht", "Flamberge"]
  },
  {
    "category": "General Knowledge",
    "type": "multiple",
    "difficulty": "easy",
    "question": "Which American-owned brewery led the country in sales by volume in 2015?",
    "correct_answer": "D. G. Yuengling and Son, Inc",
    "incorrect_answers": [
      "Anheuser Busch",
      "Boston Beer Company",
      "Miller Coors"
    ]
  },
  {
    "category": "General Knowledge",
    "type": "multiple",
    "difficulty": "easy",
    "question": "According to Sherlock Holmes, 'If you eliminate the impossible, whatever remains, however improbable, must be the...'",
    "correct_answer": "Truth",
    "incorrect_answers": ["Answer", "Cause", "Source"]
  },
  {
    "category": "General Knowledge",
    "type": "multiple",
    "difficulty": "easy",
    "question": "What do the letters of the fast food chain KFC stand for?",
    "correct_answer": "Kentucky Fried Chicken",
    "incorrect_answers": [
      "Kentucky Fresh Cheese",
      "Kibbled Freaky Cow",
      "Kiwi Food Cut"
    ]
  },
  {
    "category": "General Knowledge",
    "type": "multiple",
    "difficulty": "easy",
    "question": "Which restaurant's mascot is a clown?",
    "correct_answer": "McDonald's",
    "incorrect_answers": ["Whataburger", "Burger King", "Sonic"]
  },
  {
    "category": "General Knowledge",
    "type": "multiple",
    "difficulty": "easy",
    "question": "What color is the 'Ex' in FedEx Ground?",
    "correct_answer": "Green",
    "incorrect_answers": ["Red", "Light Blue", "Orange"]
  },
  {
    "category": "General Knowledge",
    "type": "multiple",
    "difficulty": "easy",
    "question": "What was the first ever London Underground line to be built?",
    "correct_answer": "Metropolitan Line",
    "incorrect_answers": ["Circle Line", "Bakerloo Line", "Victoria Line"]
  },
  {
    "category": "General Knowledge",
    "type": "multiple",
    "difficulty": "easy",
    "question": "How tall is the Burj Khalifa?",
    "correct_answer": "2,722 ft",
    "incorrect_answers": ["2,717 ft", "2,546 ft", "3,024 ft"]
  },
  {
    "category": "General Knowledge",
    "type": "multiple",
    "difficulty": "easy",
    "question": "Which of the following card games revolves around numbers and basic math?",
    "correct_answer": "Uno",
    "incorrect_answers": ["Go Fish", "Twister", "Munchkin"]
  },
  {
    "category": "General Knowledge",
    "type": "multiple",
    "difficulty": "easy",
    "question": "Which sign of the zodiac comes between Virgo and Scorpio?",
    "correct_answer": "Libra",
    "incorrect_answers": ["Gemini", "Taurus", "Capricorn"]
  },
  {
    "category": "General Knowledge",
    "type": "multiple",
    "difficulty": "easy",
    "question": "What is Tasmania?",
    "correct_answer": "An Australian State",
    "incorrect_answers": [
      "A flavor of Ben and Jerry's ice-cream",
      "A Psychological Disorder",
      "The Name of a Warner Brothers Cartoon Character"
    ]
  },
  {
    "category": "General Knowledge",
    "type": "multiple",
    "difficulty": "easy",
    "question": "Which country, not including Japan, has the most people of japanese decent?",
    "correct_answer": "Brazil",
    "incorrect_answers": ["China", "South Korea", "United States of America"]
  },
  {
    "category": "General Knowledge",
    "type": "multiple",
    "difficulty": "easy",
    "question": "Which of the following is the IATA code for Manchester Airport?",
    "correct_answer": "MAN",
    "incorrect_answers": ["EGLL", "LHR", "EGCC"]
  },
  {
    "category": "General Knowledge",
    "type": "multiple",
    "difficulty": "easy",
    "question": "What is the Zodiac symbol for Gemini?",
    "correct_answer": "Twins",
    "incorrect_answers": ["Fish", "Scales", "Maiden"]
  },
  {
    "category": "General Knowledge",
    "type": "multiple",
    "difficulty": "easy",
    "question": "What zodiac sign is represented by a pair of scales?",
    "correct_answer": "Libra",
    "incorrect_answers": ["Aries", "Capricorn", "Sagittarius"]
  },
  {
    "category": "General Knowledge",
    "type": "multiple",
    "difficulty": "easy",
    "question": "The Flag of the European Union has how many stars on it?",
    "correct_answer": "12",
    "incorrect_answers": ["10", "14", "16"]
  },
  {
    "category": "General Knowledge",
    "type": "multiple",
    "difficulty": "easy",
    "question": "How many furlongs are there in a mile?",
    "correct_answer": "Eight",
    "incorrect_answers": ["Two", "Four", "Six"]
  },
  {
    "category": "General Knowledge",
    "type": "multiple",
    "difficulty": "easy",
    "question": "When one is 'envious', they are said to be what color?",
    "correct_answer": "Green",
    "incorrect_answers": ["Red", "Blue", "Yellow"]
  },
  {
    "category": "General Knowledge",
    "type": "multiple",
    "difficulty": "easy",
    "question": "When someone is cowardly, they are said to have what color belly?",
    "correct_answer": "Yellow",
    "incorrect_answers": ["Green", "Red", "Blue"]
  },
  {
    "category": "General Knowledge",
    "type": "multiple",
    "difficulty": "easy",
    "question": "What is the closest planet to our solar system's sun?",
    "correct_answer": "Mercury",
    "incorrect_answers": ["Mars", "Jupiter", "Earth"]
  },
  {
    "category": "General Knowledge",
    "type": "multiple",
    "difficulty": "easy",
    "question": "Earth is located in which galaxy?",
    "correct_answer": "The Milky Way Galaxy",
    "incorrect_answers": [
      "The Mars Galaxy",
      "The Galaxy Note",
      "The Black Hole"
    ]
  }
]

export default questions;