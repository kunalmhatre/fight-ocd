export const obsessionsState = {
  isTestCompleted: false,
  currentTheme: 8,
  currentConcern: 7,
  themes: [
    {
      title: "Aggressive Obsessions",
      concerns: [
        {
          concern: "Actively harming others intentionally",
          discomfortLevel: 5,
        },
        { concern: "Harming yourself intentionally", discomfortLevel: 5 },
        { concern: "Going crazy and harming others", discomfortLevel: 5 },
        {
          concern: "Violent or repulsive images, thoughts or words",
          discomfortLevel: 4,
        },
        { concern: "Blurting out obscenities or insults", discomfortLevel: 5 },
        {
          concern: "Making embarrassing or obscene gestures",
          discomfortLevel: 3,
        },
        { concern: "Writing obscenities", discomfortLevel: 5 },
        {
          concern: "Acting out in antisocial ways in public",
          discomfortLevel: 2,
        },
        { concern: "Having insulted or offended others", discomfortLevel: 5 },
        {
          concern:
            "Acting on impulses to rob, steal from, take advantage of, or cheat others",
          discomfortLevel: 1,
        },
        {
          concern: "Rejecting, divorcing, or being unfaithful to a loved one",
          discomfortLevel: 5,
        },
        {
          concern:
            "Deliberately hoping that others will have accidents, become ill or die",
          discomfortLevel: 5,
        },
      ],
    },
    {
      title: "Sexual Obsessions",
      concerns: [
        {
          concern: "Forbidden or perverse thoughts, images or impulses",
          discomfortLevel: 5,
        },
        { concern: "Sex with children", discomfortLevel: 5 },
        { concern: "Sex with animals", discomfortLevel: 5 },
        { concern: "Incest", discomfortLevel: 5 },
        {
          concern: "Being homosexual or acting homosexually",
          discomfortLevel: 5,
        },
        { concern: "Doubt about your sexual identity", discomfortLevel: 5 },
        {
          concern: "Sex with religious figures or celebrities",
          discomfortLevel: 5,
        },
        { concern: "Acting sexually toward others", discomfortLevel: 5 },
        {
          concern: "Doubt about possibly having acted sexually toward others",
          discomfortLevel: 5,
        },
        {
          concern:
            "Doubt about possibly having been acted upon sexually by others",
          discomfortLevel: 5,
        },
      ],
    },
    {
      title: "Contamination Obsessions",
      concerns: [
        {
          concern:
            "Bodily waste or secretions, e.g. feces, urine, saliva, perspiration, blood, semen",
          discomfortLevel: 5,
        },
        { concern: "Dirt or grime", discomfortLevel: 5 },
        { concern: "Germs, or viruses", discomfortLevel: 5 },
        {
          concern:
            "Environmental contaminants (asbestos, lead, radiation, toxic wastes, etc.)",
          discomfortLevel: 5,
        },
        {
          concern:
            "Household chemicals (cleansers, solvents, drain openers, insecticides)",
          discomfortLevel: 5,
        },
        {
          concern: "Auto exhaust or other poisonous gases",
          discomfortLevel: 5,
        },
        { concern: "Garbage, refuse, or their containers", discomfortLevel: 5 },
        { concern: "Grease or greasy items", discomfortLevel: 5 },
        { concern: "Sticky substances", discomfortLevel: 5 },
        {
          concern:
            "Medication, or the effects of having ingested medication in the past",
          discomfortLevel: 5,
        },
        {
          concern:
            "Your food or drink having been adulterated or tampered with by others",
          discomfortLevel: 5,
        },
        { concern: "Broken glass", discomfortLevel: 5 },
        { concern: "Poisonous plants", discomfortLevel: 5 },
        { concern: "Contact with live animals", discomfortLevel: 5 },
        { concern: "Contact with dead animals", discomfortLevel: 5 },
        { concern: "Contact with insects", discomfortLevel: 5 },
        { concern: "Contact with other people", discomfortLevel: 5 },
        {
          concern: "Contact with unclean or shabby looking people",
          discomfortLevel: 5,
        },
        { concern: "Contracting an unspecified illness", discomfortLevel: 5 },
        { concern: "Contracting an specific illness", discomfortLevel: 5 },
        {
          concern: "Spreading illness to, or contaminating others",
          discomfortLevel: 5,
        },
        {
          concern: "Hospitals, doctor's offices and health care workers",
          discomfortLevel: 5,
        },
        {
          concern:
            "Leaving or spreading an essence or trace of yourself behind on objects or others",
          discomfortLevel: 5,
        },
        {
          concern:
            "Being contaminated by thoughts of harm happening to yourself or others",
          discomfortLevel: 5,
        },
        {
          concern:
            "A specific person, or place felt to be contaminated in some nonspecific way",
          discomfortLevel: 5,
        },
        { concern: "Being contaminated by certain words", discomfortLevel: 5 },
        {
          concern: "Being contaminated by the names of certain illnesses",
          discomfortLevel: 5,
        },
        {
          concern: "Being contaminated by seeing an ill or disabled person",
          discomfortLevel: 5,
        },
        {
          concern: "Being contaminated by the memory of a person who has died",
          discomfortLevel: 5,
        },
        {
          concern: "Being contaminated by certain numbers or their multiples",
          discomfortLevel: 5,
        },
        { concern: "Being contaminated by certain colors", discomfortLevel: 5 },
        {
          concern:
            "Your belongings being contaminated by having been present or used when something unpleasant was occurring",
          discomfortLevel: 5,
        },
        {
          concern: "Being contaminated by evil or the devil",
          discomfortLevel: 5,
        },
      ],
    },
    {
      title: "Religious Obsessions",
      concerns: [
        {
          concern: "Being deliberately sinful or blasphemous",
          discomfortLevel: 5,
        },
        {
          concern:
            "Doubtful thoughts as to whether you acted sinfully or blasphemously in the past",
          discomfortLevel: 5,
        },
        {
          concern: "Fears of having acted sinfully or unethically",
          discomfortLevel: 5,
        },
        { concern: "Doubting your faith or beliefs", discomfortLevel: 5 },
        {
          concern:
            "Unacceptable thoughts about religious figures, religion, or deities",
          discomfortLevel: 5,
        },
        { concern: "Thoughts of being possessed", discomfortLevel: 5 },
        {
          concern: "Thoughts of having to be perfectly religious",
          discomfortLevel: 5,
        },
      ],
    },
    {
      title: "Obsessions of Harm, Danger, Loss, or Embarrassment",
      concerns: [
        {
          concern: "Having an accident, illness or being injured",
          discomfortLevel: 5,
        },
        {
          concern: "An accident, illness or injury happening to someone else",
          discomfortLevel: 5,
        },
        {
          concern: "Accidentally losing control and harming others",
          discomfortLevel: 5,
        },
        {
          concern: "Accidentally losing control and harming self",
          discomfortLevel: 5,
        },
        {
          concern:
            "Causing harm to others through your own negligence or carelessness",
          discomfortLevel: 5,
        },
        {
          concern: "Causing harm to others through my thoughts",
          discomfortLevel: 5,
        },
        {
          concern:
            "Causing harm to self through your own negligence or carelessness",
          discomfortLevel: 5,
        },
        {
          concern: "Causing harm to self through my thoughts",
          discomfortLevel: 5,
        },
        {
          concern:
            "Never being able to be happy, or never being able to get what you want in life",
          discomfortLevel: 5,
        },
        {
          concern:
            "Doubt about whether you somehow harmed or injured others in the past",
          discomfortLevel: 5,
        },
        { concern: "Being deliberately harmed by others", discomfortLevel: 5 },
        { concern: "Being rejected by a loved one", discomfortLevel: 5 },
        {
          concern: "Being cheated or taken advantage of by others",
          discomfortLevel: 5,
        },
        {
          concern: "Having somehow cheated or taken advantage of others",
          discomfortLevel: 5,
        },
        { concern: "Having insulted or offended others", discomfortLevel: 5 },
        {
          concern:
            "Objects in the environment having been moved or changed in unexplainable ways",
          discomfortLevel: 5,
        },
        { concern: "Damage or theft of property", discomfortLevel: 5 },
        { concern: "Losing or misplacing property", discomfortLevel: 5 },
        {
          concern:
            "Forgetting information (memories, facts, appointments, etc.)",
          discomfortLevel: 5,
        },
        {
          concern: "Being trapped in an unsatisfactory life or relationship",
          discomfortLevel: 5,
        },
        {
          concern: "Being looked at or noticed by others in a critical way",
          discomfortLevel: 5,
        },
        { concern: "Acting inappropriately in public", discomfortLevel: 5 },
        { concern: "Your own mortality", discomfortLevel: 5 },
        {
          concern: "The mortality of your family and friends",
          discomfortLevel: 5,
        },
        { concern: "Your children not being your own", discomfortLevel: 5 },
      ],
    },
    {
      title: "Superstitious or Magical Obsessions",
      concerns: [
        { concern: "Having bad luck", discomfortLevel: 5 },
        { concern: "Bad luck happening to someone else", discomfortLevel: 5 },
        {
          concern: "Lucky or unlucky numbers or their multiples",
          discomfortLevel: 5,
        },
        { concern: "Lucky or unlucky colors", discomfortLevel: 5 },
        {
          concern: "Lucky or unlucky objects or possessions",
          discomfortLevel: 5,
        },
        {
          concern:
            "The possibility that thinking or hearing of bad events can make them occur to yourself others",
          discomfortLevel: 5,
        },
        {
          concern:
            "Certain words names, or images being able to cause bad luck",
          discomfortLevel: 5,
        },
        {
          concern: "Certain actions or behaviors being able to cause bad luck",
          discomfortLevel: 5,
        },
        { concern: "Being possessed", discomfortLevel: 5 },
        {
          concern:
            "Places, objects or people associated with unlucky occasions causing bad luck by contact",
          discomfortLevel: 5,
        },
        {
          concern:
            "The need to perform certain activities a special number of times",
          discomfortLevel: 5,
        },
        {
          concern: "Lucky or unlucky mental arrangements of things",
          discomfortLevel: 5,
        },
      ],
    },
    {
      title: "Health and Body-Focused Obsessions",
      concerns: [
        {
          concern: "Parts of your body are ugly or disfigured in some way",
          discomfortLevel: 5,
        },
        {
          concern:
            "Your body gives off a bad odor (e.g., breath, armpits, genital, etc)",
          discomfortLevel: 5,
        },
        { concern: "Your body has scars or marks", discomfortLevel: 5 },
        {
          concern: "Question how certain parts of your body work or function",
          discomfortLevel: 5,
        },
        {
          concern:
            "A part of your body does not work properly or functions differently than it used to",
          discomfortLevel: 5,
        },
        { concern: "Parts of your body are asymmetrical", discomfortLevel: 5 },
        {
          concern: "Part(s) of your body is (are) too large or small",
          discomfortLevel: 5,
        },
        { concern: "You are overweight or underweight", discomfortLevel: 5 },
        { concern: "You will choke or vomit accidentally", discomfortLevel: 5 },
        {
          concern: "You are going bald or have thinning hair",
          discomfortLevel: 5,
        },
        {
          concern: "Part(s) of your body is (are) aging prematurely",
          discomfortLevel: 5,
        },
        {
          concern:
            "Clothing does not fit certain parts of your body correctly (too loose or too tight)",
          discomfortLevel: 5,
        },
        {
          concern:
            "You have brain damage or your mental faculties are impaired",
          discomfortLevel: 5,
        },
        {
          concern: "You have undiagnosed serious illnesses",
          discomfortLevel: 5,
        },
      ],
    },
    {
      title: "Perfectionistic Obsessions",
      concerns: [
        {
          concern:
            "Questioning whether you have said, done, or thought certain things perfectly",
          discomfortLevel: 5,
        },
        {
          concern:
            "Questioning whether others perfectly understand what you have said",
          discomfortLevel: 5,
        },
        {
          concern:
            "Wanting to do, think, or say everything (or certain things) perfectly",
          discomfortLevel: 5,
        },
        { concern: "Wanting to have a perfect appearance", discomfortLevel: 5 },
        {
          concern: "Wanting your clothes to fit perfectly",
          discomfortLevel: 5,
        },
        {
          concern: "Questioning whether you have told the truth perfectly",
          discomfortLevel: 5,
        },
        {
          concern:
            "Making or keeping your home or possessions perfectly clean or pristine",
          discomfortLevel: 5,
        },
        {
          concern: "Keeping your possessions in perfect order",
          discomfortLevel: 5,
        },
        {
          concern: "Ordering things or making them symmetrical",
          discomfortLevel: 5,
        },
        {
          concern:
            "Wanting to know everything about a specific subject or topic",
          discomfortLevel: 5,
        },
        {
          concern: "Perfectly understanding what you have read",
          discomfortLevel: 5,
        },
        {
          concern: "Perfectly communicating your thoughts through writing",
          discomfortLevel: 5,
        },
      ],
    },
    {
      title: "Neutral Obsessions",
      concerns: [
        { concern: "Sounds, words, or music", discomfortLevel: 5 },
        { concern: "Nonsense or trivial images", discomfortLevel: 5 },
        { concern: "Counting for no special reason", discomfortLevel: 5 },
        {
          concern:
            "Repetitive questions for which there are no answers or which are unimportant",
          discomfortLevel: 5,
        },
        {
          concern: "The excessive awareness of your own thought processes",
          discomfortLevel: 5,
        },
        {
          concern:
            "The awareness of specific things in your environment (sounds, colors, objects, etc.)",
          discomfortLevel: 5,
        },
        {
          concern:
            "Excessive awareness of normal body functioning (breathing, eyes blinking, heart, etc.)",
          discomfortLevel: 5,
        },
        {
          concern:
            "Excessive awareness of abnormal body functioning (ringing in ears, aches, stiffness, pains, etc)",
          discomfortLevel: 5,
        },
      ],
    },
  ],
};

export const compulsionsState = {
  isTestCompleted: false,
  currentTheme: 11,
  currentConcern: 3,
  themes: [
    {
      title: "Decontamination Compulsions",
      concerns: [
        {
          concern: "Washing your hands ritually and/or excessively",
          discomfortLevel: 5,
        },
        {
          concern: "Bathing, or showering ritually and/or excessively",
          discomfortLevel: 4,
        },
        { concern: "Disinfecting yourself", discomfortLevel: 5 },
        {
          concern: "Brushing your teeth to remove contamination",
          discomfortLevel: 3,
        },
        {
          concern: "Disinfecting others or having them disinfect themselves",
          discomfortLevel: 2,
        },
        {
          concern:
            "Disinfecting and/or cleaning your environment or your possessions",
          discomfortLevel: 1,
        },
        {
          concern:
            "Washing or cleaning items before they can be used or allowed in the house",
          discomfortLevel: 5,
        },
        {
          concern:
            "Changing or having others change clothing frequently to avoid contamination",
          discomfortLevel: 5,
        },
        {
          concern: "Discarding or destroying potentially contaminated items",
          discomfortLevel: 5,
        },
        {
          concern: "Wiping, blowing on, or shaking out items before using them",
          discomfortLevel: 5,
        },
        {
          concern: "Avoidance of certain foods which may be contaminated",
          discomfortLevel: 5,
        },
        {
          concern:
            "Avoidance of specific persons, places, or objects which might be contaminated",
          discomfortLevel: 5,
        },
        {
          concern: "Using gloves, paper, etc. to touch things",
          discomfortLevel: 5,
        },
        {
          concern:
            "Having family or friends perform any of the previous compulsions on your behalf",
          discomfortLevel: 5,
        },
        {
          concern:
            "Performing, reciting, or thinking ritually to avoid or remove contamination",
          discomfortLevel: 5,
        },
        {
          concern: "Excessive questioning of others about contamination",
          discomfortLevel: 5,
        },
        { concern: "Using public telephones", discomfortLevel: 5 },
        {
          concern: "Touching door handles in public places",
          discomfortLevel: 5,
        },
        { concern: "Handling or cooking food", discomfortLevel: 5 },
        { concern: "Washing dishes", discomfortLevel: 5 },
        { concern: "Washing clothing", discomfortLevel: 5 },
        { concern: "Handling money", discomfortLevel: 5 },
        { concern: "Handling garbage or waste baskets", discomfortLevel: 5 },
        {
          concern:
            "Traveling on public transportation (buses, trains, taxis, etc.)",
          discomfortLevel: 5,
        },
        { concern: "Using toilet to urinate", discomfortLevel: 5 },
        { concern: "Using toilet to defecate", discomfortLevel: 5 },
        { concern: "Using public restrooms", discomfortLevel: 5 },
        { concern: "Visiting a hospital", discomfortLevel: 5 },
        { concern: "Eating in restaurants", discomfortLevel: 5 },
        { concern: "Going to movies", discomfortLevel: 5 },
      ],
    },
    {
      title: "Checking Compulsions",
      concerns: [
        { concern: "Doors and windows", discomfortLevel: 5 },
        { concern: "Water taps", discomfortLevel: 5 },
        { concern: "Electrical appliances", discomfortLevel: 5 },
        { concern: "Stoves", discomfortLevel: 5 },
        { concern: "Light switches", discomfortLevel: 5 },
        { concern: "Car doors, windows, headlights, etc.", discomfortLevel: 5 },
        { concern: "Items to be mailed or mailboxes", discomfortLevel: 5 },
        { concern: "Whereabouts of sharp objects", discomfortLevel: 5 },
        { concern: "Extinguished cigarettes or matches", discomfortLevel: 5 },
        {
          concern: "The arrangement of objects for symmetry or perfection",
          discomfortLevel: 5,
        },
        {
          concern: "Surfaces or objects for marks or damage",
          discomfortLevel: 5,
        },
        {
          concern:
            "Objects, surfaces, or your own body parts for contamination",
          discomfortLevel: 5,
        },
        {
          concern: "Repetitive praying or crossing yourself",
          discomfortLevel: 5,
        },
        { concern: "What you have read", discomfortLevel: 5 },
        { concern: "Your paperwork or writing for errors", discomfortLevel: 5 },
        {
          concern: "Your writing for obscenities or errors",
          discomfortLevel: 5,
        },
        { concern: "Filling out forms", discomfortLevel: 5 },
        { concern: "Doing arithmetic", discomfortLevel: 5 },
        { concern: "Counting money and/or making change", discomfortLevel: 5 },
        {
          concern:
            "Driving situations (to verify that you did not hit someone or something with a vehicle)",
          discomfortLevel: 5,
        },
        {
          concern:
            "Your own or another's vital signs or body (for signs of illness)",
          discomfortLevel: 5,
        },
        { concern: "For possible hazards to children", discomfortLevel: 5 },
        {
          concern:
            "The possibility that unspecified harm will occur to yourself or others",
          discomfortLevel: 5,
        },
        {
          concern:
            "Frequent phone calls to family and loved one’s to insure they are safe",
          discomfortLevel: 5,
        },
        {
          concern:
            "The possibility that you may have harmed yourself or others accidentally or through negligence",
          discomfortLevel: 5,
        },
        {
          concern: "Whether or not someone has acted sexually toward you",
          discomfortLevel: 5,
        },
        {
          concern: "Whether or not you have acted sexually toward someone else",
          discomfortLevel: 5,
        },
        {
          concern: "For prowlers (in closets, under bed, etc.)",
          discomfortLevel: 5,
        },
        { concern: "For objects dropped accidentally", discomfortLevel: 5 },
        {
          concern: "That valuable items were not accidentally thrown away",
          discomfortLevel: 5,
        },
        {
          concern:
            "That you haven’t left anything behind when you leave any place",
          discomfortLevel: 5,
        },
        { concern: "Container tops or lids for closure", discomfortLevel: 5 },
        {
          concern: "That one did not injure another through negligence",
          discomfortLevel: 5,
        },
        {
          concern:
            "Your own words or actions (to verify that you did not act inappropriately)",
          discomfortLevel: 5,
        },
        {
          concern: "Your own memory (by asking yourself or others)",
          discomfortLevel: 5,
        },
        {
          concern: "That you have made the perfect decision",
          discomfortLevel: 5,
        },
        {
          concern: "Repetitively apologizing or asking for forgiveness",
          discomfortLevel: 5,
        },
        {
          concern:
            "That you have not touched something hazardous or contaminated",
          discomfortLevel: 5,
        },
        {
          concern: "Yourself or your environment for signs of contamination",
          discomfortLevel: 5,
        },
        {
          concern: "For sources of dangerous gases or fumes",
          discomfortLevel: 5,
        },
        {
          concern:
            "That you have not ingested foods which are unhealthy or forbidden",
          discomfortLevel: 5,
        },
        {
          concern:
            "Your food or drink for drugs or chemicals put there by others or by accident",
          discomfortLevel: 5,
        },
        { concern: "Your phone for eavesdroppers", discomfortLevel: 5 },
        {
          concern:
            "Following your spouse or lover to make sure they are being faithful",
          discomfortLevel: 5,
        },
        {
          concern:
            "The mail or phone usage of your spouse or lover to make sure they are being faithful",
          discomfortLevel: 5,
        },
        {
          concern:
            "Questioning the whereabouts of your spouse or lover to make sure they are being faithful",
          discomfortLevel: 5,
        },
        {
          concern:
            "Watching who your spouse or lover looks at ( in public or in movies, TV, and magazines) to make sure they are not being unfaithful",
          discomfortLevel: 5,
        },
      ],
    },
    {
      title: "Magical/Undoing Compulsions",
      concerns: [
        {
          concern:
            "Reciting or thinking of certain words, names, sounds, phrases, numbers, or images",
          discomfortLevel: 5,
        },
        {
          concern: "Moving your body or gesturing in a special way",
          discomfortLevel: 5,
        },
        {
          concern:
            "Having to mentally arrange certain images numbers, words, names, etc.",
          discomfortLevel: 5,
        },
        {
          concern:
            "Having to physically arrange objects in your environment in special ways",
          discomfortLevel: 5,
        },
        {
          concern: "Stepping in special ways or on special spots when walking",
          discomfortLevel: 5,
        },
        {
          concern: "Repeating an activity with a good thought or image in mind",
          discomfortLevel: 5,
        },
        {
          concern: "Performing actions or movements in reverse",
          discomfortLevel: 5,
        },
        { concern: "Washing off ideas or thoughts", discomfortLevel: 5 },
        { concern: "Rethinking thoughts", discomfortLevel: 5 },
        { concern: "Thinking thoughts in reverse", discomfortLevel: 5 },
        {
          concern: "Having to eat or not eat certain foods",
          discomfortLevel: 5,
        },
        {
          concern:
            "Gazing at or thinking of certain numbers or words to cancel others out",
          discomfortLevel: 5,
        },
        { concern: "Gazing at objects in a special way", discomfortLevel: 5 },
        {
          concern: "Touching certain things in a special way",
          discomfortLevel: 5,
        },
      ],
    },
    {
      title: "Perfectionistic Compulsions",
      concerns: [
        {
          concern:
            "Arrange objects or possessions in special or symmetrical ways",
          discomfortLevel: 5,
        },
        {
          concern: "Keep new possessions unused and in perfect condition",
          discomfortLevel: 5,
        },
        { concern: "Buy only items which are perfect", discomfortLevel: 5 },
        {
          concern: "Keep your home or living space perfectly clean and orderly",
          discomfortLevel: 5,
        },
        { concern: "Putting laundry away", discomfortLevel: 5 },
        {
          concern:
            "Avoid using rooms, closets, drawers, etc., once they have been arranged perfectly",
          discomfortLevel: 5,
        },
        {
          concern: "Keep your possessions perfectly neat and clean",
          discomfortLevel: 5,
        },
        {
          concern:
            "Having items in drawers, closets or cabinets perfectly and neatly arranged",
          discomfortLevel: 5,
        },
        { concern: "Say things perfectly", discomfortLevel: 5 },
        {
          concern:
            "Remember or memorize things perfectly or in a special order",
          discomfortLevel: 5,
        },
        {
          concern:
            "Read or reread every word in a document to avoid missing anything",
          discomfortLevel: 5,
        },
        {
          concern: "Know or learn everything about a particular subject",
          discomfortLevel: 5,
        },
        {
          concern: "Keep remaking decisions to ensure picking the perfect one",
          discomfortLevel: 5,
        },
        {
          concern:
            "Rewrite or write over numbers or letters to make them perfect",
          discomfortLevel: 5,
        },
        {
          concern:
            "Perform ordinary activities extra slowly to get them done perfectly",
          discomfortLevel: 5,
        },
        {
          concern: "Think of certain things perfectly or exactly",
          discomfortLevel: 5,
        },
        { concern: "Be perfectly religious", discomfortLevel: 5 },
        {
          concern:
            "Punish or penalize yourself when you do not behave perfectly",
          discomfortLevel: 5,
        },
        { concern: "Be perfectly self-denying", discomfortLevel: 5 },
        {
          concern:
            "Look at certain things in the environment in a special or perfect way (visually tracing or lining them up, etc.)",
          discomfortLevel: 5,
        },
        {
          concern:
            "Be perfectly aware of everything going on around you in your environment",
          discomfortLevel: 5,
        },
        {
          concern: "Tell the truth or be perfectly honest",
          discomfortLevel: 5,
        },
        {
          concern:
            "Perfectly confess about all your thoughts or behaviors to others",
          discomfortLevel: 5,
        },
        {
          concern:
            "Confess to having done wrongful things whether you have done them or not",
          discomfortLevel: 5,
        },
        {
          concern:
            "Make one's appearance perfect (e.g. hair, nails, clothes, makeup, etc.)",
          discomfortLevel: 5,
        },
        {
          concern: "Cut your hair (to make it perfect or symmetrical",
          discomfortLevel: 5,
        },
        {
          concern: "Perform activities until they feel just right",
          discomfortLevel: 5,
        },
        {
          concern: "Keep extensive lists or records of certain things",
          discomfortLevel: 5,
        },
        {
          concern: "Only perform certain activities at perfect times",
          discomfortLevel: 5,
        },
      ],
    },
    {
      title: "Counting Compulsions",
      concerns: [
        { concern: "While performing certain activities", discomfortLevel: 5 },
        {
          concern: "Repeating behaviors a special number of times",
          discomfortLevel: 5,
        },
        {
          concern: "Performing behaviors an odd or even number of times",
          discomfortLevel: 5,
        },
        {
          concern:
            "To ensure an activity has been done a certain number of times or for a long enough duration",
          discomfortLevel: 5,
        },
        {
          concern:
            "To ensure that an activity has been done an odd or even number of times",
          discomfortLevel: 5,
        },
        {
          concern:
            "The numbers of objects or occurrences of certain things in the environment",
          discomfortLevel: 5,
        },
        { concern: "Up to or beyond certain numbers", discomfortLevel: 5 },
        {
          concern:
            "Simply to count (unconnected with any special idea or activity)",
          discomfortLevel: 5,
        },
        {
          concern:
            "The occurrences of certain body functions (e.g., breathing, steps, etc.)",
          discomfortLevel: 5,
        },
      ],
    },
    {
      title: "Touching or Movement Compulsions",
      concerns: [
        { concern: "Gesture or pose in a special way", discomfortLevel: 5 },
        {
          concern: "Look or glance at something in a special way",
          discomfortLevel: 5,
        },
        { concern: "Move in symmetrical or special ways", discomfortLevel: 5 },
        {
          concern:
            "Having to step in special ways or on special spots when walking",
          discomfortLevel: 5,
        },
        {
          concern: "Tic, twitch, or grimace in a special way",
          discomfortLevel: 5,
        },
        {
          concern: "Move in special ways while carrying out certain activities",
          discomfortLevel: 5,
        },
        { concern: "Reverse movements you have just made", discomfortLevel: 5 },
        {
          concern:
            "Repeat certain activities (e.g., sitting down, getting up, passing through doorways) or by certain locations) a special number of times, or until they feel right",
          discomfortLevel: 5,
        },
        {
          concern: "Touch furniture before sitting down or standing up",
          discomfortLevel: 5,
        },
        {
          concern: "Touch doors or drawers before opening or closing them",
          discomfortLevel: 5,
        },
        {
          concern: "Touch the edges or certain parts of things",
          discomfortLevel: 5,
        },
        {
          concern: "Touch doorways before walking through them",
          discomfortLevel: 5,
        },
        {
          concern: "Touch things a certain number of times",
          discomfortLevel: 5,
        },
        { concern: "Touch things in special patterns", discomfortLevel: 5 },
        {
          concern:
            "Touch, move, or handle possessions a certain way before using them",
          discomfortLevel: 5,
        },
      ],
    },
    {
      title: "Mental Compulsions",
      concerns: [
        { concern: "Make mental maps of places", discomfortLevel: 5 },
        { concern: "Memorize facts or information", discomfortLevel: 5 },
        { concern: "Make mental lists or arrangements", discomfortLevel: 5 },
        {
          concern: "Know or learn everything about a particular subject",
          discomfortLevel: 5,
        },
        {
          concern:
            "Keep reviewing past situations to try to remember or understand them",
          discomfortLevel: 5,
        },
        {
          concern: "Think specific thoughts in special ways",
          discomfortLevel: 5,
        },
        { concern: "Think about specific topics", discomfortLevel: 5 },
        {
          concern: "Create specific mental images or pictures",
          discomfortLevel: 5,
        },
        {
          concern: "Repeat your own or someone else's words in your mind",
          discomfortLevel: 5,
        },
        {
          concern: "Think of sequences of special numbers or words",
          discomfortLevel: 5,
        },
        { concern: "Rethink specific thoughts", discomfortLevel: 5 },
        { concern: "Think certain thoughts in reverse", discomfortLevel: 5 },
        {
          concern:
            "Analyzing your thoughts to determine if they are (or were) appropriate",
          discomfortLevel: 5,
        },
        {
          concern:
            "Analyzing your thoughts to determine if they are really compulsions or not",
          discomfortLevel: 5,
        },
        {
          concern:
            "Checking your own memory to determine if you came to harm in the past",
          discomfortLevel: 5,
        },
        {
          concern:
            "Whether your own thoughts or reactions indicate that you are sexually attracted to others in ways which are inappropriate to you",
          discomfortLevel: 5,
        },
      ],
    },
    {
      title: "Protective Compulsions",
      concerns: [
        {
          concern:
            "Questioning others, or your own memory, to determine if you have harmed or insulted someone (recently or in the past)",
          discomfortLevel: 5,
        },
        {
          concern:
            "Recording and collecting information about past events to help in determining if harm occurred to yourself or others in the past",
          discomfortLevel: 5,
        },
        {
          concern:
            "Collecting and removing objects from the environment that could harm others (i.e., tacks, razor blades, nails, matches, lit cigarettes, glass, etc.)",
          discomfortLevel: 5,
        },
        {
          concern:
            "Difficulty using sharp instruments (knives, scissors, etc.)",
          discomfortLevel: 5,
        },
        {
          concern:
            "Checking on the whereabouts of others to be certain that harm has not occurred to them",
          discomfortLevel: 5,
        },
        {
          concern:
            "Trying to limit the activities of others to prevent harm from happening to them",
          discomfortLevel: 5,
        },
        {
          concern: "Warning others repeatedly of potential harm or danger",
          discomfortLevel: 5,
        },
        {
          concern:
            "Asking others if you will be safe or if things will turn out well for you",
          discomfortLevel: 5,
        },
        {
          concern:
            "Asking others if they will be safe or if things will turn out well for them",
          discomfortLevel: 5,
        },
        {
          concern:
            "Confessing to having done things you believe may have harmed others",
          discomfortLevel: 5,
        },
        { concern: "List making", discomfortLevel: 5 },
      ],
    },
    {
      title: "Body-Focused Compulsions",
      concerns: [
        {
          concern:
            "Checking your appearance in the mirror for problems or imperfections",
          discomfortLevel: 5,
        },
        {
          concern:
            "Checking your appearance or physical reaction to assure yourself about your sexual identity",
          discomfortLevel: 5,
        },
        { concern: "Choosing what clothes to wear", discomfortLevel: 5 },
        {
          concern:
            "Questioning others directly or indirectly about your appearance",
          discomfortLevel: 5,
        },
        {
          concern:
            "Seeking frequent medical consultations to check on your appearance",
          discomfortLevel: 5,
        },
        {
          concern: "Having to have your appearance improved surgically",
          discomfortLevel: 5,
        },
        { concern: "Your body for symmetry or perfection", discomfortLevel: 5 },
        {
          concern: "Your appearance or grooming for symmetry or perfection",
          discomfortLevel: 5,
        },
        {
          concern:
            "Cutting your hair to excess or for long periods of time to make it perfect",
          discomfortLevel: 5,
        },
        { concern: "Washing your hair to make it perfect", discomfortLevel: 5 },
        {
          concern:
            "Checking your body for a bad odor (e.g. breath, genital, armpits, etc.)",
          discomfortLevel: 5,
        },
        {
          concern:
            "Picking or squeezing pimples or blemishes to make your skin perfect",
          discomfortLevel: 5,
        },
        { concern: "Checking the way your body works", discomfortLevel: 5 },
        {
          concern: "Seeking medical consultations for possible illnesses",
          discomfortLevel: 5,
        },
        {
          concern: "Reading about illnesses in books or on the internet",
          discomfortLevel: 5,
        },
        {
          concern:
            "Self examination of your body for lumps or marks that could mean you have an illness",
          discomfortLevel: 5,
        },
        {
          concern:
            "Frequent examination of current symptoms of possible illness",
          discomfortLevel: 5,
        },
        {
          concern: "Having family examine you for signs of possible illness",
          discomfortLevel: 5,
        },
        {
          concern:
            "Discussing symptoms of possible illness with family and friends",
          discomfortLevel: 5,
        },
        { concern: "Taking your temperature", discomfortLevel: 5 },
      ],
    },
    {
      title: "Hoarding/Collecting Compulsions/Impulsions",
      concerns: [
        {
          concern: "Saving broken, irreparable, or useless items",
          discomfortLevel: 5,
        },
        {
          concern:
            "Buying excessive quantities of items beyond an amount needed for reasonable usage",
          discomfortLevel: 5,
        },
        {
          concern:
            "Retrieving from or searching through your own or other people's trash",
          discomfortLevel: 5,
        },
        {
          concern:
            "Inability to throw things out due to fear of accidentally throwing important items away",
          discomfortLevel: 5,
        },
        {
          concern:
            "Going to excessive lengths (including extreme self-denial) to save money",
          discomfortLevel: 5,
        },
        {
          concern:
            "Saving excessive quantities of informational matter (newspapers, old lists, magazines, junk mail, etc.)",
          discomfortLevel: 5,
        },
        {
          concern:
            "Saving items simply because they belong to yourself or loved ones",
          discomfortLevel: 5,
        },
        {
          concern:
            "Having to own complete collections of certain things, even if not important",
          discomfortLevel: 5,
        },
        {
          concern: "Keeping extensive lists or records of certain things",
          discomfortLevel: 5,
        },
      ],
    },
    {
      title: "Grooming Impulsions",
      concerns: [
        {
          concern:
            "Hair pulling (from head, eyebrows, eyelashes, pubic area, body, etc.)",
          discomfortLevel: 5,
        },
        { concern: "Skin picking or biting", discomfortLevel: 5 },
        {
          concern: "Nail or cuticle biting, picking, or cutting",
          discomfortLevel: 5,
        },
        {
          concern:
            "Picking or squeezing pimples or blemishes for the sensation of it",
          discomfortLevel: 5,
        },
      ],
    },
    {
      title: "Self-Mutilative Impulsions",
      concerns: [
        { concern: "Cutting or scratching yourself", discomfortLevel: 5 },
        { concern: "Burning yourself", discomfortLevel: 5 },
        { concern: "Poking yourself in the eyes", discomfortLevel: 5 },
        {
          concern: "Biting yourself (e.g., insides of cheeks)",
          discomfortLevel: 5,
        },
      ],
    },
  ],
};
