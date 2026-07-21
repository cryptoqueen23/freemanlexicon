/* ================================================================
   Legal Literacy Guides
   ----------------------------------------------------------------
   Plain-language walkthroughs of everyday legal situations, written
   for the general public — not legal advice, just orientation on
   how things generally work and what terms you'll encounter.
   Each guide cross-references terms defined in the Black's Law
   and UCC sections of this site.
   ================================================================ */

const LITERACY_GUIDES = [
  {
    title: "Signing a Contract",
    category: "Everyday Contracts",
    related: ["CONSIDERATION", "BREACH OF CONTRACT", "CONTRACT"],
    body: "A contract is simply a promise (or set of promises) the law will enforce. For it to be binding, you generally need an offer, an acceptance of that offer, and consideration — something of value each side gives up. 'I'll pay you $50 to mow my lawn Saturday' is an offer; saying yes is acceptance; the $50 and the mowing are consideration. Read everything before you sign — once you sign, you're agreeing you read and understood it, even if you didn't. If a term matters to you, get it in writing; verbal promises are hard to prove later. If someone breaches (breaks) a contract, the usual remedy is money damages to put you where you'd have been if the deal had gone through — not automatically canceling the whole deal or forcing performance."
  },
  {
    title: "Renting an Apartment",
    category: "Housing",
    related: ["LEASE", "EVICTION", "ENCUMBRANCE"],
    body: "A lease is a contract for the right to use property for a set time in exchange for rent. Before signing, know your state's rules on security deposits (how much can be charged, when it must be returned, what deductions are allowed) — these vary widely and aren't part of federal law. A landlord generally can't evict you without going through court first, even if you're behind on rent; 'self-help' evictions (changing locks, shutting off utilities) are illegal almost everywhere. If your lease says something different from what the landlord told you verbally, the written lease usually controls. Keep copies of everything — move-in condition photos, repair requests, payment records."
  },
  {
    title: "If You're Stopped by Police",
    category: "Criminal Law Basics",
    related: ["DUE PROCESS OF LAW", "SEARCH WARRANT", "HABEAS CORPUS"],
    body: "You have the right to remain silent — you can say 'I am exercising my right to remain silent' and decline to answer questions beyond identifying yourself if your state requires it. You have the right to refuse consent to a search of your person, car, or home; officers generally need a warrant, your consent, or specific legal justification (like probable cause) to search without one. Saying 'I do not consent to a search' out loud matters, even if the search happens anyway — it preserves your rights for later. If you're arrested, you have the right to an attorney; ask for one clearly and stop answering questions until they're present. None of this is about being uncooperative — it's about not giving up rights you don't have to give up."
  },
  {
    title: "Buying a Used Car",
    category: "Consumer Transactions",
    related: ["WARRANTY", "CAVEAT EMPTOR", "FRAUD"],
    body: "The old rule of caveat emptor ('let the buyer beware') still shapes used-car sales — private sellers usually make no promises about condition unless they put them in writing. Dealers, however, are required in most states to post a Buyer's Guide sticker showing whether the car is sold 'as-is' or with a warranty. Get anything the seller promises about the car's condition or history in writing — verbal assurances are hard to enforce later. Have an independent mechanic inspect the car before buying if possible, and check the vehicle history report for accidents or title issues. If a seller actively lies about a known defect, that can cross the line from 'as-is' sale into fraud — but simply not knowing about a problem generally isn't fraud."
  },
  {
    title: "Making a Will",
    category: "Estate Planning",
    related: ["TESTAMENT", "EXECUTOR", "INTESTATE", "PROBATE", "DEVISE"],
    body: "A will (or testament) is a legal document saying who gets your property after you die and who's in charge of carrying that out (your executor). If you die without a valid will, you die intestate, and state law — not your wishes — decides who inherits, usually following a fixed order of relatives. Most states require a will to be in writing, signed, and witnessed by a certain number of people who aren't inheriting under it. After death, a will typically goes through probate, the court process that verifies the will is valid and supervises the executor distributing property. A will only controls property that doesn't already have a named beneficiary elsewhere — things like retirement accounts and life insurance usually pass by beneficiary designation instead, regardless of what the will says."
  },
  {
    title: "Small Claims Court",
    category: "Going to Court",
    related: ["PLAINTIFF", "DEFENDANT", "VERDICT", "JURISDICTION"],
    body: "Small claims court is designed for disputes involving relatively small dollar amounts (the limit varies by state, often $2,500–$25,000) without needing a lawyer. The person suing is the plaintiff; the person being sued is the defendant. Filing usually involves a modest fee, a simple form describing the dispute, and formally notifying the other side (service of process). Bring documentation — contracts, receipts, photos, messages — since the judge decides based on evidence, not just who tells a better story. Many small claims courts don't allow either side to bring a lawyer at all, or make it optional and rare. If you win, you get a judgment, but collecting the money is a separate step — the court doesn't automatically hand it over."
  },
  {
    title: "Getting Married — the Legal Side",
    category: "Family Law",
    related: ["DOMICILE", "CONTRACT"],
    body: "Marriage is, among other things, a legal contract that changes your rights around property, inheritance, taxes, and decision-making for each other in a medical emergency. A marriage license (obtained before the ceremony) and a properly filed marriage certificate (after) are what make it official in the eyes of the law — the ceremony itself isn't what creates the legal marriage. Without a prenuptial agreement, most states default to certain rules about how property acquired during the marriage is treated if the marriage ends. Common-law marriage (being treated as married without a license, based on cohabitation and holding yourselves out as spouses) is recognized in only a handful of states — don't assume it applies to you."
  },
  {
    title: "Employment Basics: At-Will Work",
    category: "Workplace",
    related: ["BREACH OF CONTRACT", "GOOD FAITH"],
    body: "Most U.S. employment is 'at-will,' meaning either you or your employer can end the relationship at any time, for almost any reason, or no reason — with important exceptions. It's illegal to fire someone for discriminatory reasons (race, sex, religion, disability, and other protected categories) or in retaliation for things like filing a workers' comp claim or reporting illegal conduct. An employment contract or union agreement can override at-will status and require 'just cause' for termination. An employee handbook alone usually isn't a contract, though some of its promises can become enforceable depending on how they're written and your state's law. If you sign a non-compete or arbitration agreement, read it — these can limit your options later in ways that aren't obvious when you're excited about a new job."
  },
  {
    title: "Small Business Contracts & the UCC",
    category: "Business & Commerce",
    related: ["§ 2-207", "§ 2-314", "§ 1-304"],
    body: "If your business buys or sells goods (physical products, not services), the Uniform Commercial Code's Article 2 governs the deal even if your contract never mentions it. One quirk worth knowing: under UCC § 2-207, if you send a purchase order and the seller sends back an acknowledgment with slightly different terms, you may still have a binding contract — the 'battle of the forms' rule, different from the traditional rule that any change in terms means no deal yet. Unless you say otherwise, selling goods as a merchant generally comes with an implied warranty of merchantability — that the goods work for their ordinary purpose — even if you never promised anything explicitly. And UCC § 1-304 means every commercial contract carries a baked-in duty of good faith, whether you wrote it in or not."
  },
  {
    title: "Understanding Court Documents",
    category: "Going to Court",
    related: ["SUMMONS", "INDICTMENT", "SUBPOENA", "AFFIDAVIT"],
    body: "A summons notifies you that a lawsuit has been filed against you and that you must respond by a deadline — ignoring it can result in a default judgment against you without your side ever being heard. A subpoena orders you to appear and testify, or to produce documents, even if you're not a party to the case yourself. An affidavit is a written statement you swear to be true, carrying the same legal weight as testifying in person. In criminal cases, an indictment is the formal charge against a defendant, typically issued by a grand jury for serious crimes. Deadlines on these documents are usually strict — missing one can cost you rights you'd otherwise have, so the date on the document matters as much as its content."
  },
];
