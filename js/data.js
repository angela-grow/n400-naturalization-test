const QUESTIONS = [
  {
    "id": 1,
    "category": "AMERICAN GOVERNMENT",
    "subcategory": "Principles of American Government",
    "question": "What is the form of government of the United States?",
    "answers": [
      "Republic",
      "Constitution-based federal republic",
      "Representative democracy"
    ],
    "starred": false,
    "note": null,
    "dynamic": false
  },
  {
    "id": 2,
    "category": "AMERICAN GOVERNMENT",
    "subcategory": "Principles of American Government",
    "question": "What is the supreme law of the land?",
    "answers": [
      "(U.S.) Constitution"
    ],
    "starred": true,
    "note": null,
    "dynamic": false
  },
  {
    "id": 3,
    "category": "AMERICAN GOVERNMENT",
    "subcategory": "Principles of American Government",
    "question": "Name one thing the U.S. Constitution does.",
    "answers": [
      "Forms the government",
      "Defines powers of government",
      "Defines the parts of government",
      "Protects the rights of the people"
    ],
    "starred": false,
    "note": null,
    "dynamic": false
  },
  {
    "id": 4,
    "category": "AMERICAN GOVERNMENT",
    "subcategory": "Principles of American Government",
    "question": "The U.S. Constitution starts with the words “We the People.” What does “We the People” mean?",
    "answers": [
      "Self-government",
      "Popular sovereignty",
      "Consent of the governed",
      "People should govern themselves",
      "(Example of) social contract"
    ],
    "starred": false,
    "note": null,
    "dynamic": false
  },
  {
    "id": 5,
    "category": "AMERICAN GOVERNMENT",
    "subcategory": "Principles of American Government",
    "question": "How are changes made to the U.S. Constitution?",
    "answers": [
      "Amendments",
      "The amendment process"
    ],
    "starred": false,
    "note": null,
    "dynamic": false
  },
  {
    "id": 6,
    "category": "AMERICAN GOVERNMENT",
    "subcategory": "Principles of American Government",
    "question": "What does the Bill of Rights protect?",
    "answers": [
      "(The basic) rights of Americans",
      "(The basic) rights of people living in the United States"
    ],
    "starred": false,
    "note": null,
    "dynamic": false
  },
  {
    "id": 7,
    "category": "AMERICAN GOVERNMENT",
    "subcategory": "Principles of American Government",
    "question": "How many amendments does the U.S. Constitution have?",
    "answers": [
      "Twenty-seven (27)"
    ],
    "starred": true,
    "note": null,
    "dynamic": false
  },
  {
    "id": 8,
    "category": "AMERICAN GOVERNMENT",
    "subcategory": "Principles of American Government",
    "question": "Why is the Declaration of Independence important?",
    "answers": [
      "It says America is free from British control.",
      "It says all people are created equal.",
      "It identifies inherent rights.",
      "It identifies individual freedoms."
    ],
    "starred": false,
    "note": null,
    "dynamic": false
  },
  {
    "id": 9,
    "category": "AMERICAN GOVERNMENT",
    "subcategory": "Principles of American Government",
    "question": "What founding document said the American colonies were free from Britain?",
    "answers": [
      "Declaration of Independence"
    ],
    "starred": false,
    "note": null,
    "dynamic": false
  },
  {
    "id": 10,
    "category": "AMERICAN GOVERNMENT",
    "subcategory": "Principles of American Government",
    "question": "Name two important ideas from the Declaration of Independence and the U.S. Constitution.",
    "answers": [
      "Equality",
      "Liberty",
      "Social contract",
      "Natural rights",
      "Limited government",
      "Self-government"
    ],
    "starred": false,
    "note": null,
    "dynamic": false
  },
  {
    "id": 11,
    "category": "AMERICAN GOVERNMENT",
    "subcategory": "Principles of American Government",
    "question": "The words “Life, Liberty, and the pursuit of Happiness” are in what founding document?",
    "answers": [
      "Declaration of Independence"
    ],
    "starred": false,
    "note": null,
    "dynamic": false
  },
  {
    "id": 12,
    "category": "AMERICAN GOVERNMENT",
    "subcategory": "Principles of American Government",
    "question": "What is the economic system of the United States?",
    "answers": [
      "Capitalism",
      "Free market economy"
    ],
    "starred": true,
    "note": null,
    "dynamic": false
  },
  {
    "id": 13,
    "category": "AMERICAN GOVERNMENT",
    "subcategory": "Principles of American Government",
    "question": "What is the rule of law?",
    "answers": [
      "Everyone must follow the law.",
      "Leaders must obey the law.",
      "Government must obey the law.",
      "No one is above the law."
    ],
    "starred": false,
    "note": null,
    "dynamic": false
  },
  {
    "id": 14,
    "category": "AMERICAN GOVERNMENT",
    "subcategory": "Principles of American Government",
    "question": "Many documents influenced the U.S. Constitution. Name one.",
    "answers": [
      "Declaration of Independence",
      "Articles of Confederation",
      "Federalist Papers",
      "Anti-Federalist Papers",
      "Virginia Declaration of Rights",
      "Fundamental Orders of Connecticut",
      "Mayflower Compact",
      "Iroquois Great Law of Peace"
    ],
    "starred": false,
    "note": null,
    "dynamic": false
  },
  {
    "id": 15,
    "category": "AMERICAN GOVERNMENT",
    "subcategory": "Principles of American Government",
    "question": "There are three branches of government. Why?",
    "answers": [
      "So one part does not become too powerful",
      "Checks and balances",
      "Separation of powers"
    ],
    "starred": false,
    "note": null,
    "dynamic": false
  },
  {
    "id": 16,
    "category": "AMERICAN GOVERNMENT",
    "subcategory": "System of Government",
    "question": "Name the three branches of government.",
    "answers": [
      "Legislative, executive, and judicial",
      "Congress, president, and the courts"
    ],
    "starred": false,
    "note": null,
    "dynamic": false
  },
  {
    "id": 17,
    "category": "AMERICAN GOVERNMENT",
    "subcategory": "System of Government",
    "question": "The President of the United States is in charge of which branch of government?",
    "answers": [
      "Executive branch"
    ],
    "starred": false,
    "note": null,
    "dynamic": false
  },
  {
    "id": 18,
    "category": "AMERICAN GOVERNMENT",
    "subcategory": "System of Government",
    "question": "What part of the federal government writes laws?",
    "answers": [
      "(U.S.) Congress",
      "(U.S. or national) legislature",
      "Legislative branch"
    ],
    "starred": false,
    "note": null,
    "dynamic": false
  },
  {
    "id": 19,
    "category": "AMERICAN GOVERNMENT",
    "subcategory": "System of Government",
    "question": "What are the two parts of the U.S. Congress?",
    "answers": [
      "Senate and House (of Representatives)"
    ],
    "starred": false,
    "note": null,
    "dynamic": false
  },
  {
    "id": 20,
    "category": "AMERICAN GOVERNMENT",
    "subcategory": "System of Government",
    "question": "Name one power of the U.S. Congress.",
    "answers": [
      "Writes laws",
      "Declares war",
      "Makes the federal budget"
    ],
    "starred": true,
    "note": null,
    "dynamic": false
  },
  {
    "id": 21,
    "category": "AMERICAN GOVERNMENT",
    "subcategory": "System of Government",
    "question": "How many U.S. senators are there?",
    "answers": [
      "One hundred (100)"
    ],
    "starred": false,
    "note": null,
    "dynamic": false
  },
  {
    "id": 22,
    "category": "AMERICAN GOVERNMENT",
    "subcategory": "System of Government",
    "question": "How long is a term for a U.S. senator?",
    "answers": [
      "Six (6) years"
    ],
    "starred": false,
    "note": null,
    "dynamic": false
  },
  {
    "id": 23,
    "category": "AMERICAN GOVERNMENT",
    "subcategory": "System of Government",
    "question": "Who is one of your state’s U.S. senators now?",
    "answers": [
      "Answers will vary. [District of Columbia residents and residents of U.S. territories should answer that D.C. (or the territory where the applicant lives) has no U.S. senators.]"
    ],
    "starred": false,
    "note": null,
    "dynamic": false
  },
  {
    "id": 24,
    "category": "AMERICAN GOVERNMENT",
    "subcategory": "System of Government",
    "question": "How many voting members are in the House of Representatives?",
    "answers": [
      "Four hundred thirty-five (435)"
    ],
    "starred": false,
    "note": null,
    "dynamic": false
  },
  {
    "id": 25,
    "category": "AMERICAN GOVERNMENT",
    "subcategory": "System of Government",
    "question": "How long is a term for a member of the House of Representatives?",
    "answers": [
      "Two (2) years"
    ],
    "starred": false,
    "note": null,
    "dynamic": false
  },
  {
    "id": 26,
    "category": "AMERICAN GOVERNMENT",
    "subcategory": "System of Government",
    "question": "Why do U.S. representatives serve shorter terms than U.S. senators?",
    "answers": [
      "To more closely follow public opinion"
    ],
    "starred": false,
    "note": null,
    "dynamic": false
  },
  {
    "id": 27,
    "category": "AMERICAN GOVERNMENT",
    "subcategory": "System of Government",
    "question": "How many senators does each state have?",
    "answers": [
      "Two (2)"
    ],
    "starred": false,
    "note": null,
    "dynamic": false
  },
  {
    "id": 28,
    "category": "AMERICAN GOVERNMENT",
    "subcategory": "System of Government",
    "question": "Why does each state have two senators?",
    "answers": [
      "Equal representation (for small states)",
      "The Great Compromise (Connecticut Compromise)"
    ],
    "starred": false,
    "note": null,
    "dynamic": false
  },
  {
    "id": 29,
    "category": "AMERICAN GOVERNMENT",
    "subcategory": "System of Government",
    "question": "Name your U.S. representative.",
    "answers": [
      "Answers will vary. [Residents of territories with nonvoting Delegates or Resident Commissioners may provide the name of that Delegate or Commissioner. Also acceptable is any statement that the territory has no (voting) representatives in Congress.]"
    ],
    "starred": false,
    "note": null,
    "dynamic": false
  },
  {
    "id": 30,
    "category": "AMERICAN GOVERNMENT",
    "subcategory": "System of Government",
    "question": "What is the name of the Speaker of the House of Representatives now?",
    "answers": [
      "Visit uscis.gov/citizenship/testupdates for the name of the Speaker of the House of Representatives."
    ],
    "starred": true,
    "note": null,
    "dynamic": true
  },
  {
    "id": 31,
    "category": "AMERICAN GOVERNMENT",
    "subcategory": "System of Government",
    "question": "Who does a U.S. senator represent?",
    "answers": [
      "Citizens of their state",
      "People of their state"
    ],
    "starred": false,
    "note": null,
    "dynamic": false
  },
  {
    "id": 32,
    "category": "AMERICAN GOVERNMENT",
    "subcategory": "System of Government",
    "question": "Who elects U.S. senators?",
    "answers": [
      "Citizens from their state"
    ],
    "starred": false,
    "note": null,
    "dynamic": false
  },
  {
    "id": 33,
    "category": "AMERICAN GOVERNMENT",
    "subcategory": "System of Government",
    "question": "Who does a member of the House of Representatives represent?",
    "answers": [
      "Citizens in their (congressional) district",
      "Citizens in their district",
      "People from their (congressional) district",
      "People in their district"
    ],
    "starred": false,
    "note": null,
    "dynamic": false
  },
  {
    "id": 34,
    "category": "AMERICAN GOVERNMENT",
    "subcategory": "System of Government",
    "question": "Who elects members of the House of Representatives?",
    "answers": [
      "Citizens from their (congressional) district"
    ],
    "starred": false,
    "note": null,
    "dynamic": false
  },
  {
    "id": 35,
    "category": "AMERICAN GOVERNMENT",
    "subcategory": "System of Government",
    "question": "Some states have more representatives than other states. Why?",
    "answers": [
      "(Because of) the state’s population",
      "(Because) they have more people",
      "(Because) some states have more people"
    ],
    "starred": false,
    "note": null,
    "dynamic": false
  },
  {
    "id": 36,
    "category": "AMERICAN GOVERNMENT",
    "subcategory": "System of Government",
    "question": "The President of the United States is elected for how many years?",
    "answers": [
      "Four (4) years"
    ],
    "starred": true,
    "note": null,
    "dynamic": false
  },
  {
    "id": 37,
    "category": "AMERICAN GOVERNMENT",
    "subcategory": "System of Government",
    "question": "The President of the United States can serve only two terms. Why?",
    "answers": [
      "(Because of) the 22nd Amendment",
      "To keep the president from becoming too powerful"
    ],
    "starred": false,
    "note": null,
    "dynamic": false
  },
  {
    "id": 38,
    "category": "AMERICAN GOVERNMENT",
    "subcategory": "System of Government",
    "question": "What is the name of the President of the United States now?",
    "answers": [
      "Visit uscis.gov/citizenship/testupdates for the name of the President of the United States."
    ],
    "starred": true,
    "note": null,
    "dynamic": true
  },
  {
    "id": 39,
    "category": "AMERICAN GOVERNMENT",
    "subcategory": "System of Government",
    "question": "What is the name of the Vice President of the United States now?",
    "answers": [
      "Visit uscis.gov/citizenship/testupdates for the name of the Vice President of the United States."
    ],
    "starred": true,
    "note": null,
    "dynamic": true
  },
  {
    "id": 40,
    "category": "AMERICAN GOVERNMENT",
    "subcategory": "System of Government",
    "question": "If the president can no longer serve, who becomes president?",
    "answers": [
      "The Vice President (of the United States)"
    ],
    "starred": false,
    "note": null,
    "dynamic": false
  },
  {
    "id": 41,
    "category": "AMERICAN GOVERNMENT",
    "subcategory": "System of Government",
    "question": "Name one power of the president.",
    "answers": [
      "Signs bills into law",
      "Vetoes bills",
      "Enforces laws",
      "Commander in Chief (of the military)",
      "Chief diplomat",
      "Appoints federal judges"
    ],
    "starred": false,
    "note": null,
    "dynamic": false
  },
  {
    "id": 42,
    "category": "AMERICAN GOVERNMENT",
    "subcategory": "System of Government",
    "question": "Who is Commander in Chief of the U.S. military?",
    "answers": [
      "The President (of the United States)"
    ],
    "starred": false,
    "note": null,
    "dynamic": false
  },
  {
    "id": 43,
    "category": "AMERICAN GOVERNMENT",
    "subcategory": "System of Government",
    "question": "Who signs bills to become laws?",
    "answers": [
      "The President (of the United States)"
    ],
    "starred": false,
    "note": null,
    "dynamic": false
  },
  {
    "id": 44,
    "category": "AMERICAN GOVERNMENT",
    "subcategory": "System of Government",
    "question": "Who vetoes bills?",
    "answers": [
      "The President (of the United States)"
    ],
    "starred": true,
    "note": null,
    "dynamic": false
  },
  {
    "id": 45,
    "category": "AMERICAN GOVERNMENT",
    "subcategory": "System of Government",
    "question": "Who appoints federal judges?",
    "answers": [
      "The President (of the United States)"
    ],
    "starred": false,
    "note": null,
    "dynamic": false
  },
  {
    "id": 46,
    "category": "AMERICAN GOVERNMENT",
    "subcategory": "System of Government",
    "question": "The executive branch has many parts. Name one.",
    "answers": [
      "President (of the United States)",
      "Cabinet",
      "Federal departments and agencies"
    ],
    "starred": false,
    "note": null,
    "dynamic": false
  },
  {
    "id": 47,
    "category": "AMERICAN GOVERNMENT",
    "subcategory": "System of Government",
    "question": "What does the President’s Cabinet do?",
    "answers": [
      "Advises the President (of the United States)"
    ],
    "starred": false,
    "note": null,
    "dynamic": false
  },
  {
    "id": 48,
    "category": "AMERICAN GOVERNMENT",
    "subcategory": "System of Government",
    "question": "What are two Cabinet-level positions?",
    "answers": [
      "Attorney General",
      "Secretary of Agriculture",
      "Secretary of Commerce",
      "Secretary of Education",
      "Secretary of Energy",
      "Secretary of Health and Human Services",
      "Secretary of Homeland Security",
      "Secretary of Housing and Urban Development",
      "Secretary of the Interior",
      "Secretary of Labor",
      "Secretary of State",
      "Secretary of Transportation",
      "Secretary of the Treasury",
      "Secretary of Veterans Affairs",
      "Secretary of War (Defense)",
      "Vice-President",
      "Administrator of the Environmental Protection Agency",
      "Administrator of the Small Business Administration",
      "Director of the Central Intelligence Agency",
      "Director of the Office of Management and Budget",
      "Director of National Intelligence",
      "United States Trade Representative"
    ],
    "starred": false,
    "note": null,
    "dynamic": false
  },
  {
    "id": 49,
    "category": "AMERICAN GOVERNMENT",
    "subcategory": "System of Government",
    "question": "Why is the Electoral College important?",
    "answers": [
      "It decides who is elected president.",
      "It provides a compromise between the popular election of the president and congressional selection."
    ],
    "starred": false,
    "note": null,
    "dynamic": false
  },
  {
    "id": 50,
    "category": "AMERICAN GOVERNMENT",
    "subcategory": "System of Government",
    "question": "What is one part of the judicial branch?",
    "answers": [
      "Supreme Court",
      "Federal Courts"
    ],
    "starred": false,
    "note": null,
    "dynamic": false
  },
  {
    "id": 51,
    "category": "AMERICAN GOVERNMENT",
    "subcategory": "System of Government",
    "question": "What does the judicial branch do?",
    "answers": [
      "Reviews laws",
      "Explains laws",
      "Resolves disputes (disagreements) about the law",
      "Decides if a law goes against the (U.S.) Constitution"
    ],
    "starred": false,
    "note": null,
    "dynamic": false
  },
  {
    "id": 52,
    "category": "AMERICAN GOVERNMENT",
    "subcategory": "System of Government",
    "question": "What is the highest court in the United States?",
    "answers": [
      "Supreme Court"
    ],
    "starred": true,
    "note": null,
    "dynamic": false
  },
  {
    "id": 53,
    "category": "AMERICAN GOVERNMENT",
    "subcategory": "System of Government",
    "question": "How many seats are on the Supreme Court?",
    "answers": [
      "Nine (9)"
    ],
    "starred": false,
    "note": null,
    "dynamic": false
  },
  {
    "id": 54,
    "category": "AMERICAN GOVERNMENT",
    "subcategory": "System of Government",
    "question": "How many Supreme Court justices are usually needed to decide a case?",
    "answers": [
      "Five (5)"
    ],
    "starred": false,
    "note": null,
    "dynamic": false
  },
  {
    "id": 55,
    "category": "AMERICAN GOVERNMENT",
    "subcategory": "System of Government",
    "question": "How long do Supreme Court justices serve?",
    "answers": [
      "(For) life",
      "Lifetime appointment",
      "(Until) retirement"
    ],
    "starred": false,
    "note": null,
    "dynamic": false
  },
  {
    "id": 56,
    "category": "AMERICAN GOVERNMENT",
    "subcategory": "System of Government",
    "question": "Supreme Court justices serve for life. Why?",
    "answers": [
      "To be independent (of politics)",
      "To limit outside (political) influence"
    ],
    "starred": false,
    "note": null,
    "dynamic": false
  },
  {
    "id": 57,
    "category": "AMERICAN GOVERNMENT",
    "subcategory": "System of Government",
    "question": "Who is the Chief Justice of the United States now?",
    "answers": [
      "Visit uscis.gov/citizenship/testupdates for the name of the Chief Justice of the United States."
    ],
    "starred": false,
    "note": null,
    "dynamic": true
  },
  {
    "id": 58,
    "category": "AMERICAN GOVERNMENT",
    "subcategory": "System of Government",
    "question": "Name one power that is only for the federal government.",
    "answers": [
      "Print paper money",
      "Mint coins",
      "Declare war",
      "Create an army",
      "Make treaties",
      "Set foreign policy"
    ],
    "starred": false,
    "note": null,
    "dynamic": false
  },
  {
    "id": 59,
    "category": "AMERICAN GOVERNMENT",
    "subcategory": "System of Government",
    "question": "Name one power that is only for the states.",
    "answers": [
      "Provide schooling and education",
      "Provide protection (police)",
      "Provide safety (fire departments)",
      "Give a driver’s license",
      "Approve zoning and land use"
    ],
    "starred": false,
    "note": null,
    "dynamic": false
  },
  {
    "id": 60,
    "category": "AMERICAN GOVERNMENT",
    "subcategory": "System of Government",
    "question": "What is the purpose of the 10th Amendment?",
    "answers": [
      "(It states that the) powers not given to the federal government belong to the states or to the people."
    ],
    "starred": false,
    "note": null,
    "dynamic": false
  },
  {
    "id": 61,
    "category": "AMERICAN GOVERNMENT",
    "subcategory": "System of Government",
    "question": "Who is the governor of your state now?",
    "answers": [
      "Answers will vary. [District of Columbia residents should answer that D.C. does not have a governor.]"
    ],
    "starred": true,
    "note": null,
    "dynamic": false
  },
  {
    "id": 62,
    "category": "AMERICAN GOVERNMENT",
    "subcategory": "System of Government",
    "question": "What is the capital of your state?",
    "answers": [
      "Answers will vary. [District of Columbia residents should answer that D.C. is not a state and does not have a capital. Residents of U.S. territories should name the capital of the territory.]"
    ],
    "starred": false,
    "note": null,
    "dynamic": false
  },
  {
    "id": 63,
    "category": "AMERICAN GOVERNMENT",
    "subcategory": "Rights and Responsibilities",
    "question": "There are four amendments to the U.S. Constitution about who can vote. Describe one of them.",
    "answers": [
      "Citizens eighteen (18) and older (can vote).",
      "You don’t have to pay (a poll tax) to vote.",
      "Any citizen can vote. (Women and men can vote.)",
      "A male citizen of any race (can vote)."
    ],
    "starred": false,
    "note": null,
    "dynamic": false
  },
  {
    "id": 64,
    "category": "AMERICAN GOVERNMENT",
    "subcategory": "Rights and Responsibilities",
    "question": "Who can vote in federal elections, run for federal office, and serve on a jury in the United States?",
    "answers": [
      "Citizens",
      "Citizens of the United States",
      "U.S. citizens"
    ],
    "starred": false,
    "note": null,
    "dynamic": false
  },
  {
    "id": 65,
    "category": "AMERICAN GOVERNMENT",
    "subcategory": "Rights and Responsibilities",
    "question": "What are three rights of everyone living in the United States?",
    "answers": [
      "Freedom of expression",
      "Freedom of speech",
      "Freedom of assembly",
      "Freedom to petition the government",
      "Freedom of religion",
      "The right to bear arms"
    ],
    "starred": false,
    "note": null,
    "dynamic": false
  },
  {
    "id": 66,
    "category": "AMERICAN GOVERNMENT",
    "subcategory": "Rights and Responsibilities",
    "question": "What do we show loyalty to when we say the Pledge of Allegiance?",
    "answers": [
      "The United States",
      "The flag"
    ],
    "starred": true,
    "note": null,
    "dynamic": false
  },
  {
    "id": 67,
    "category": "AMERICAN GOVERNMENT",
    "subcategory": "Rights and Responsibilities",
    "question": "Name two promises that new citizens make in the Oath of Allegiance.",
    "answers": [
      "Give up loyalty to other countries",
      "Defend the (U.S.) Constitution",
      "Obey the laws of the United States",
      "Serve in the military (if needed)",
      "Serve (help, do important work for) the nation (if needed)",
      "Be loyal to the United States"
    ],
    "starred": false,
    "note": null,
    "dynamic": false
  },
  {
    "id": 68,
    "category": "AMERICAN GOVERNMENT",
    "subcategory": "Rights and Responsibilities",
    "question": "How can people become United States citizens?",
    "answers": [
      "Be born in the United States, under the conditions set by the 14th Amendment",
      "Naturalize",
      "Derive citizenship (under conditions set by Congress)"
    ],
    "starred": false,
    "note": null,
    "dynamic": false
  },
  {
    "id": 69,
    "category": "AMERICAN GOVERNMENT",
    "subcategory": "Rights and Responsibilities",
    "question": "What are two examples of civic participation in the United States?",
    "answers": [
      "Vote",
      "Run for office",
      "Join a political party",
      "Help with a campaign",
      "Join a civic group",
      "Join a community group",
      "Give an elected official your opinion (on an issue)",
      "Contact elected officials",
      "Support or oppose an issue or policy",
      "Write to a newspaper"
    ],
    "starred": false,
    "note": null,
    "dynamic": false
  },
  {
    "id": 70,
    "category": "AMERICAN GOVERNMENT",
    "subcategory": "Rights and Responsibilities",
    "question": "What is one way Americans can serve their country?",
    "answers": [
      "Vote",
      "Pay taxes",
      "Obey the law",
      "Serve in the military",
      "Run for office",
      "Work for local, state, or federal government"
    ],
    "starred": false,
    "note": null,
    "dynamic": false
  },
  {
    "id": 71,
    "category": "AMERICAN GOVERNMENT",
    "subcategory": "Rights and Responsibilities",
    "question": "Why is it important to pay federal taxes?",
    "answers": [
      "Required by law",
      "All people pay to fund the federal government",
      "Required by the (U.S.) Constitution (16th Amendment)",
      "Civic duty"
    ],
    "starred": false,
    "note": null,
    "dynamic": false
  },
  {
    "id": 72,
    "category": "AMERICAN GOVERNMENT",
    "subcategory": "Rights and Responsibilities",
    "question": "It is important for all men age 18 through 25 to register for the Selective Service. Name one reason why.",
    "answers": [
      "Required by law",
      "Civic duty",
      "Makes the draft fair, if needed"
    ],
    "starred": false,
    "note": null,
    "dynamic": false
  },
  {
    "id": 73,
    "category": "AMERICAN HISTORY",
    "subcategory": "Colonial Period and Independence",
    "question": "The colonists came to America for many reasons. Name one.",
    "answers": [
      "Freedom",
      "Political liberty",
      "Religious freedom",
      "Economic opportunity",
      "Escape persecution"
    ],
    "starred": false,
    "note": null,
    "dynamic": false
  },
  {
    "id": 74,
    "category": "AMERICAN HISTORY",
    "subcategory": "Colonial Period and Independence",
    "question": "Who lived in America before the Europeans arrived?",
    "answers": [
      "American Indians",
      "Native Americans"
    ],
    "starred": true,
    "note": null,
    "dynamic": false
  },
  {
    "id": 75,
    "category": "AMERICAN HISTORY",
    "subcategory": "Colonial Period and Independence",
    "question": "What group of people was taken and sold as slaves?",
    "answers": [
      "Africans",
      "People from Africa"
    ],
    "starred": false,
    "note": null,
    "dynamic": false
  },
  {
    "id": 76,
    "category": "AMERICAN HISTORY",
    "subcategory": "Colonial Period and Independence",
    "question": "What war did the Americans fight to win independence from Britain?",
    "answers": [
      "American Revolution",
      "The (American) Revolutionary War",
      "War for (American) Independence"
    ],
    "starred": false,
    "note": null,
    "dynamic": false
  },
  {
    "id": 77,
    "category": "AMERICAN HISTORY",
    "subcategory": "Colonial Period and Independence",
    "question": "Name one reason why the Americans declared independence from Britain.",
    "answers": [
      "High taxes",
      "Taxation without representation",
      "British soldiers stayed in Americans’ houses (boarding, quartering)",
      "They did not have self-government",
      "Boston Massacre",
      "Boston Tea Party (Tea Act)",
      "Stamp Act",
      "Sugar Act",
      "Townshend Acts",
      "Intolerable (Coercive) Acts"
    ],
    "starred": false,
    "note": null,
    "dynamic": false
  },
  {
    "id": 78,
    "category": "AMERICAN HISTORY",
    "subcategory": "Colonial Period and Independence",
    "question": "Who wrote the Declaration of Independence?",
    "answers": [
      "(Thomas) Jefferson"
    ],
    "starred": true,
    "note": null,
    "dynamic": false
  },
  {
    "id": 79,
    "category": "AMERICAN HISTORY",
    "subcategory": "Colonial Period and Independence",
    "question": "When was the Declaration of Independence adopted?",
    "answers": [
      "July 4, 1776"
    ],
    "starred": false,
    "note": null,
    "dynamic": false
  },
  {
    "id": 80,
    "category": "AMERICAN HISTORY",
    "subcategory": "Colonial Period and Independence",
    "question": "The American Revolution had many important events. Name one.",
    "answers": [
      "(Battle of) Bunker Hill",
      "Declaration of Independence",
      "Washington Crossing the Delaware (Battle of Trenton)",
      "(Battle of) Saratoga",
      "Valley Forge (Encampment)",
      "(Battle of) Yorktown (British surrender at Yorktown)"
    ],
    "starred": false,
    "note": null,
    "dynamic": false
  },
  {
    "id": 81,
    "category": "AMERICAN HISTORY",
    "subcategory": "Colonial Period and Independence",
    "question": "There were 13 original states. Name five.",
    "answers": [
      "New Hampshire",
      "Massachusetts",
      "Rhode Island",
      "Connecticut",
      "New York",
      "New Jersey",
      "Pennsylvania",
      "Delaware",
      "Maryland",
      "Virginia",
      "North Carolina",
      "South Carolina",
      "Georgia"
    ],
    "starred": false,
    "note": null,
    "dynamic": false
  },
  {
    "id": 82,
    "category": "AMERICAN HISTORY",
    "subcategory": "Colonial Period and Independence",
    "question": "What founding document was written in 1787?",
    "answers": [
      "(U.S.) Constitution"
    ],
    "starred": false,
    "note": null,
    "dynamic": false
  },
  {
    "id": 83,
    "category": "AMERICAN HISTORY",
    "subcategory": "Colonial Period and Independence",
    "question": "The Federalist Papers supported the passage of the U.S. Constitution. Name one of the writers.",
    "answers": [
      "(James) Madison",
      "(Alexander) Hamilton",
      "(John) Jay",
      "Publius"
    ],
    "starred": false,
    "note": null,
    "dynamic": false
  },
  {
    "id": 84,
    "category": "AMERICAN HISTORY",
    "subcategory": "Colonial Period and Independence",
    "question": "Why were the Federalist Papers important?",
    "answers": [
      "They helped people understand the (U.S.) Constitution.",
      "They supported passing the (U.S.) Constitution."
    ],
    "starred": false,
    "note": null,
    "dynamic": false
  },
  {
    "id": 85,
    "category": "AMERICAN HISTORY",
    "subcategory": "Colonial Period and Independence",
    "question": "Benjamin Franklin is famous for many things. Name one.",
    "answers": [
      "Founded the first free public libraries",
      "First Postmaster General of the United States",
      "Helped write the Declaration of Independence",
      "Inventor",
      "U.S. diplomat"
    ],
    "starred": false,
    "note": null,
    "dynamic": false
  },
  {
    "id": 86,
    "category": "AMERICAN HISTORY",
    "subcategory": "Colonial Period and Independence",
    "question": "George Washington is famous for many things. Name one.",
    "answers": [
      "“Father of Our Country”",
      "First president of the United States",
      "General of the Continental Army",
      "President of the Constitutional Convention"
    ],
    "starred": true,
    "note": null,
    "dynamic": false
  },
  {
    "id": 87,
    "category": "AMERICAN HISTORY",
    "subcategory": "Colonial Period and Independence",
    "question": "Thomas Jefferson is famous for many things. Name one.",
    "answers": [
      "Writer of the Declaration of Independence",
      "Third president of the United States",
      "Doubled the size of the United States (Louisiana Purchase)",
      "First Secretary of State",
      "Founded the University of Virginia",
      "Writer of the Virginia Statute on Religious Freedom"
    ],
    "starred": false,
    "note": null,
    "dynamic": false
  },
  {
    "id": 88,
    "category": "AMERICAN HISTORY",
    "subcategory": "Colonial Period and Independence",
    "question": "James Madison is famous for many things. Name one.",
    "answers": [
      "“Father of the Constitution”",
      "Fourth president of the United States",
      "President during the War of 1812",
      "One of the writers of the Federalist Papers"
    ],
    "starred": false,
    "note": null,
    "dynamic": false
  },
  {
    "id": 89,
    "category": "AMERICAN HISTORY",
    "subcategory": "Colonial Period and Independence",
    "question": "Alexander Hamilton is famous for many things. Name one.",
    "answers": [
      "First Secretary of the Treasury",
      "One of the writers of the Federalist Papers",
      "Helped establish the First Bank of the United States",
      "Aide to General George Washington",
      "Member of the Continental Congress"
    ],
    "starred": false,
    "note": null,
    "dynamic": false
  },
  {
    "id": 90,
    "category": "AMERICAN HISTORY",
    "subcategory": "1800s",
    "question": "What territory did the United States buy from France in 1803?",
    "answers": [
      "Louisiana Territory",
      "Louisiana"
    ],
    "starred": false,
    "note": null,
    "dynamic": false
  },
  {
    "id": 91,
    "category": "AMERICAN HISTORY",
    "subcategory": "1800s",
    "question": "Name one war fought by the United States in the 1800s.",
    "answers": [
      "War of 1812",
      "Mexican-American War",
      "Civil War",
      "Spanish-American War"
    ],
    "starred": false,
    "note": null,
    "dynamic": false
  },
  {
    "id": 92,
    "category": "AMERICAN HISTORY",
    "subcategory": "1800s",
    "question": "Name the U.S. war between the North and the South.",
    "answers": [
      "The Civil War"
    ],
    "starred": false,
    "note": null,
    "dynamic": false
  },
  {
    "id": 93,
    "category": "AMERICAN HISTORY",
    "subcategory": "1800s",
    "question": "The Civil War had many important events. Name one.",
    "answers": [
      "(Battle of) Fort Sumter",
      "Emancipation Proclamation",
      "(Battle of) Vicksburg",
      "(Battle of) Gettysburg",
      "Sherman’s March",
      "(Surrender at) Appomattox",
      "(Battle of) Antietam/Sharpsburg",
      "Lincoln was assassinated."
    ],
    "starred": false,
    "note": null,
    "dynamic": false
  },
  {
    "id": 94,
    "category": "AMERICAN HISTORY",
    "subcategory": "1800s",
    "question": "Abraham Lincoln is famous for many things. Name one.",
    "answers": [
      "Freed the slaves (Emancipation Proclamation)",
      "Saved (or preserved) the Union",
      "Led the United States during the Civil War",
      "16th president of the United States",
      "Delivered the Gettysburg Address"
    ],
    "starred": true,
    "note": null,
    "dynamic": false
  },
  {
    "id": 95,
    "category": "AMERICAN HISTORY",
    "subcategory": "1800s",
    "question": "What did the Emancipation Proclamation do?",
    "answers": [
      "Freed the slaves",
      "Freed slaves in the Confederacy",
      "Freed slaves in the Confederate states",
      "Freed slaves in most Southern states"
    ],
    "starred": false,
    "note": null,
    "dynamic": false
  },
  {
    "id": 96,
    "category": "AMERICAN HISTORY",
    "subcategory": "1800s",
    "question": "What U.S. war ended slavery?",
    "answers": [
      "The Civil War"
    ],
    "starred": false,
    "note": null,
    "dynamic": false
  },
  {
    "id": 97,
    "category": "AMERICAN HISTORY",
    "subcategory": "1800s",
    "question": "What amendment says all persons born or naturalized in the United States, and subject to the jurisdiction thereof, are U.S. citizens?",
    "answers": [
      "14th Amendment"
    ],
    "starred": false,
    "note": null,
    "dynamic": false
  },
  {
    "id": 98,
    "category": "AMERICAN HISTORY",
    "subcategory": "1800s",
    "question": "When did all men get the right to vote?",
    "answers": [
      "After the Civil War",
      "During Reconstruction",
      "(With the) 15th Amendment",
      "1870"
    ],
    "starred": false,
    "note": null,
    "dynamic": false
  },
  {
    "id": 99,
    "category": "AMERICAN HISTORY",
    "subcategory": "1800s",
    "question": "Name one leader of the women’s rights movement in the 1800s.",
    "answers": [
      "Susan B. Anthony",
      "Elizabeth Cady Stanton",
      "Sojourner Truth",
      "Harriet Tubman",
      "Lucretia Mott",
      "Lucy Stone"
    ],
    "starred": false,
    "note": null,
    "dynamic": false
  },
  {
    "id": 100,
    "category": "AMERICAN HISTORY",
    "subcategory": "Recent American History and Other Important Historical Information",
    "question": "Name one war fought by the United States in the 1900s.",
    "answers": [
      "World War I",
      "World War II",
      "Korean War",
      "Vietnam War",
      "(Persian) Gulf War"
    ],
    "starred": false,
    "note": null,
    "dynamic": false
  },
  {
    "id": 101,
    "category": "AMERICAN HISTORY",
    "subcategory": "Recent American History and Other Important Historical Information",
    "question": "Why did the United States enter World War I?",
    "answers": [
      "Because Germany attacked U.S. (civilian) ships",
      "To support the Allied Powers (England, France, Italy, and Russia)",
      "To oppose the Central Powers (Germany, Austria-Hungary, the Ottoman Empire, and Bulgaria)"
    ],
    "starred": false,
    "note": null,
    "dynamic": false
  },
  {
    "id": 102,
    "category": "AMERICAN HISTORY",
    "subcategory": "Recent American History and Other Important Historical Information",
    "question": "When did all women get the right to vote?",
    "answers": [
      "1920",
      "After World War I",
      "(With the) 19th Amendment"
    ],
    "starred": false,
    "note": null,
    "dynamic": false
  },
  {
    "id": 103,
    "category": "AMERICAN HISTORY",
    "subcategory": "Recent American History and Other Important Historical Information",
    "question": "What was the Great Depression?",
    "answers": [
      "Longest economic recession in modern history"
    ],
    "starred": false,
    "note": null,
    "dynamic": false
  },
  {
    "id": 104,
    "category": "AMERICAN HISTORY",
    "subcategory": "Recent American History and Other Important Historical Information",
    "question": "When did the Great Depression start?",
    "answers": [
      "The Great Crash (1929)",
      "Stock market crash of 1929"
    ],
    "starred": false,
    "note": null,
    "dynamic": false
  },
  {
    "id": 105,
    "category": "AMERICAN HISTORY",
    "subcategory": "Recent American History and Other Important Historical Information",
    "question": "Who was president during the Great Depression and World War II?",
    "answers": [
      "(Franklin) Roosevelt"
    ],
    "starred": false,
    "note": null,
    "dynamic": false
  },
  {
    "id": 106,
    "category": "AMERICAN HISTORY",
    "subcategory": "Recent American History and Other Important Historical Information",
    "question": "Why did the United States enter World War II?",
    "answers": [
      "(Bombing of) Pearl Harbor",
      "Japanese attacked Pearl Harbor",
      "To support the Allied Powers (England, France, and Russia)",
      "To oppose the Axis Powers (Germany, Italy, and Japan)"
    ],
    "starred": false,
    "note": null,
    "dynamic": false
  },
  {
    "id": 107,
    "category": "AMERICAN HISTORY",
    "subcategory": "Recent American History and Other Important Historical Information",
    "question": "Dwight Eisenhower is famous for many things. Name one.",
    "answers": [
      "General during World War II",
      "President at the end of (during) the Korean War",
      "34th president of the United States",
      "Signed the Federal-Aid Highway Act of 1956 (Created the Interstate System)"
    ],
    "starred": false,
    "note": null,
    "dynamic": false
  },
  {
    "id": 108,
    "category": "AMERICAN HISTORY",
    "subcategory": "Recent American History and Other Important Historical Information",
    "question": "Who was the United States’ main rival during the Cold War?",
    "answers": [
      "Soviet Union",
      "USSR",
      "Russia"
    ],
    "starred": false,
    "note": null,
    "dynamic": false
  },
  {
    "id": 109,
    "category": "AMERICAN HISTORY",
    "subcategory": "Recent American History and Other Important Historical Information",
    "question": "During the Cold War, what was one main concern of the United States?",
    "answers": [
      "Communism",
      "Nuclear war"
    ],
    "starred": false,
    "note": null,
    "dynamic": false
  },
  {
    "id": 110,
    "category": "AMERICAN HISTORY",
    "subcategory": "Recent American History and Other Important Historical Information",
    "question": "Why did the United States enter the Korean War?",
    "answers": [
      "To stop the spread of communism"
    ],
    "starred": false,
    "note": null,
    "dynamic": false
  },
  {
    "id": 111,
    "category": "AMERICAN HISTORY",
    "subcategory": "Recent American History and Other Important Historical Information",
    "question": "Why did the United States enter the Vietnam War?",
    "answers": [
      "To stop the spread of communism"
    ],
    "starred": false,
    "note": null,
    "dynamic": false
  },
  {
    "id": 112,
    "category": "AMERICAN HISTORY",
    "subcategory": "Recent American History and Other Important Historical Information",
    "question": "What did the civil rights movement do?",
    "answers": [
      "Fought to end racial discrimination"
    ],
    "starred": false,
    "note": null,
    "dynamic": false
  },
  {
    "id": 113,
    "category": "AMERICAN HISTORY",
    "subcategory": "Recent American History and Other Important Historical Information",
    "question": "Martin Luther King, Jr. is famous for many things. Name one.",
    "answers": [
      "Fought for civil rights",
      "Worked for equality for all Americans",
      "Worked to ensure that people would “not be judged by the color of their skin, but by the content of their character”"
    ],
    "starred": true,
    "note": null,
    "dynamic": false
  },
  {
    "id": 114,
    "category": "AMERICAN HISTORY",
    "subcategory": "Recent American History and Other Important Historical Information",
    "question": "Why did the United States enter the Persian Gulf War?",
    "answers": [
      "To force the Iraqi military from Kuwait"
    ],
    "starred": false,
    "note": null,
    "dynamic": false
  },
  {
    "id": 115,
    "category": "AMERICAN HISTORY",
    "subcategory": "Recent American History and Other Important Historical Information",
    "question": "What major event happened on September 11, 2001 in the United States?",
    "answers": [
      "Terrorists attacked the United States",
      "Terrorists took over two planes and crashed them into the World Trade Center in New York City",
      "Terrorists took over a plane and crashed into the Pentagon in Arlington, Virginia",
      "Terrorists took over a plane originally aimed at Washington, D.C., and crashed in a field in Pennsylvania"
    ],
    "starred": true,
    "note": null,
    "dynamic": false
  },
  {
    "id": 116,
    "category": "AMERICAN HISTORY",
    "subcategory": "Recent American History and Other Important Historical Information",
    "question": "Name one U.S. military conflict after the September 11, 2001 attacks.",
    "answers": [
      "(Global) War on Terror",
      "War in Afghanistan",
      "War in Iraq"
    ],
    "starred": false,
    "note": null,
    "dynamic": false
  },
  {
    "id": 117,
    "category": "AMERICAN HISTORY",
    "subcategory": "Recent American History and Other Important Historical Information",
    "question": "Name one American Indian tribe in the United States.",
    "answers": [
      "Apache",
      "Blackfeet",
      "Cayuga",
      "Cherokee",
      "Cheyenne",
      "Chippewa",
      "Choctaw",
      "Creek",
      "Crow",
      "Hopi",
      "Huron",
      "Inupiat",
      "Lakota",
      "Mohawk",
      "Mohegan",
      "Navajo",
      "Oneida",
      "Onondaga",
      "Pueblo",
      "Seminole",
      "Seneca",
      "Shawnee",
      "Sioux",
      "Teton",
      "Tuscarora"
    ],
    "starred": false,
    "note": "For a complete list of tribes, please visit bia.gov.",
    "dynamic": false
  },
  {
    "id": 118,
    "category": "AMERICAN HISTORY",
    "subcategory": "Recent American History and Other Important Historical Information",
    "question": "Name one example of an American innovation.",
    "answers": [
      "Light bulb",
      "Automobile (cars, internal combustion engine)",
      "Skyscrapers",
      "Airplane",
      "Assembly line",
      "Landing on the moon",
      "Integrated circuit (IC)"
    ],
    "starred": false,
    "note": null,
    "dynamic": false
  },
  {
    "id": 119,
    "category": "SYMBOLS AND HOLIDAYS",
    "subcategory": "Symbols",
    "question": "What is the capital of the United States?",
    "answers": [
      "Washington, D.C."
    ],
    "starred": false,
    "note": null,
    "dynamic": false
  },
  {
    "id": 120,
    "category": "SYMBOLS AND HOLIDAYS",
    "subcategory": "Symbols",
    "question": "Where is the Statue of Liberty?",
    "answers": [
      "New York (Harbor)",
      "Liberty Island [Also acceptable are New Jersey, near New York City, and on the Hudson (River).]"
    ],
    "starred": false,
    "note": null,
    "dynamic": false
  },
  {
    "id": 121,
    "category": "SYMBOLS AND HOLIDAYS",
    "subcategory": "Symbols",
    "question": "Why does the flag have 13 stripes?",
    "answers": [
      "(Because there were) 13 original colonies",
      "(Because the stripes) represent the original colonies"
    ],
    "starred": true,
    "note": null,
    "dynamic": false
  },
  {
    "id": 122,
    "category": "SYMBOLS AND HOLIDAYS",
    "subcategory": "Symbols",
    "question": "Why does the flag have 50 stars?",
    "answers": [
      "(Because there is) one star for each state",
      "(Because) each star represents a state",
      "(Because there are) 50 states"
    ],
    "starred": false,
    "note": null,
    "dynamic": false
  },
  {
    "id": 123,
    "category": "SYMBOLS AND HOLIDAYS",
    "subcategory": "Symbols",
    "question": "What is the name of the national anthem?",
    "answers": [
      "The Star-Spangled Banner"
    ],
    "starred": false,
    "note": null,
    "dynamic": false
  },
  {
    "id": 124,
    "category": "SYMBOLS AND HOLIDAYS",
    "subcategory": "Symbols",
    "question": "The Nation’s first motto was “E Pluribus Unum.” What does that mean?",
    "answers": [
      "Out of many, one",
      "We all become one"
    ],
    "starred": false,
    "note": null,
    "dynamic": false
  },
  {
    "id": 125,
    "category": "SYMBOLS AND HOLIDAYS",
    "subcategory": "Holidays",
    "question": "What is Independence Day?",
    "answers": [
      "A holiday to celebrate U.S. independence (from Britain)",
      "The country’s birthday"
    ],
    "starred": false,
    "note": null,
    "dynamic": false
  },
  {
    "id": 126,
    "category": "SYMBOLS AND HOLIDAYS",
    "subcategory": "Holidays",
    "question": "Name three national U.S. holidays.",
    "answers": [
      "New Year’s Day",
      "Martin Luther King, Jr. Day",
      "Presidents Day (Washington’s Birthday)",
      "Memorial Day",
      "Juneteenth",
      "Independence Day",
      "Labor Day",
      "Columbus Day",
      "Veterans Day",
      "Thanksgiving Day",
      "Christmas Day"
    ],
    "starred": true,
    "note": null,
    "dynamic": false
  },
  {
    "id": 127,
    "category": "SYMBOLS AND HOLIDAYS",
    "subcategory": "Holidays",
    "question": "What is Memorial Day?",
    "answers": [
      "A holiday to honor soldiers who died in military service"
    ],
    "starred": false,
    "note": null,
    "dynamic": false
  },
  {
    "id": 128,
    "category": "SYMBOLS AND HOLIDAYS",
    "subcategory": "Holidays",
    "question": "What is Veterans Day?",
    "answers": [
      "A holiday to honor people in the (U.S.) military",
      "A holiday to honor people who have served (in the U.S. military)"
    ],
    "starred": false,
    "note": null,
    "dynamic": false
  }
];
