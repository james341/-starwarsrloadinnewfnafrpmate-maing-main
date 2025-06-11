//       _           _    _                     _ 
//      | |         | |  | |                   | |
//   ___| | ___  ___| | _| |     ___   __ _  __| |
//  / __| |/ _ \/ _ \ |/ / |    / _ \ / _` |/ _` |
//  \__ \ |  __/  __/   <| |___| (_) | (_| | (_| |
//  |___/_|\___|\___|_|\_\______\___/ \__,_|\__,_|
//     version 2.16

// URL for the server logo
// Leave it blank to use text instead
// (Put the files in the images folder)
// (You can also use external URL)
var l_serverImage = "logo.png";

// Center logo?
// 'true' or 'false'
var l_centerLogo = false;

// Display current map and gamemode?
// 'true' or 'false'
var l_displayMapGamemode = true;

// Custom server name configuration
// Leave it blank for automatic server name
var l_serverName = "sleekLoad 2";

// Use a video for the background?
// Otherwise it will use images
// 'true' or 'false'
var l_bgVideo = true;

// Default available videos:
// "aurora.webm"
// "bluefall.webm"
// "bluetilefloor.webm"
// "bluewhitecircles.webm"
// "bokehlens.webm"
// "cleanbokeh.webm"
// "coldnight.webm"
// "colorfulburst.webm"
// "dancingstars.webm"
// "dropsflares.webm"
// "focusorangebokeh.webm"
// "glimmering.webm"
// "glowingrings.webm"
// "greencircles.webm"
// "hues.webm"
// "inthedeep.webm"
// "modernflourish.webm"
// "orangeaura.webm"
// "warminside.webm"
// "yellowgreen.webm"
//
// You can add your own video backgrounds
// Just make sure they are using webm VP8 format 
// (Place the videos in the backgrounds/videos folder)
// (You can also use external URL)
var l_background = "videoplayback (1).webm";
var l_background = "fnafggta.webm";

// (Image-background only)
// Enable map-based background image?
// If enabled, the background will be an image based on the server current map
// You need to have a background image with the same name as the map
// Also, the image needs to be in .jpg format
// E.g: gm_flatgrass.jpg, gm_construct.jpg, rp_downtown_v4c_v2.jpg
// 'true' or 'false'
var l_bgImageMapBased = false;

// (Image-background only)
// Place one or more images
// Multiple images will automatically shuffle between them
// (Place the files in the backgrounds/images folder)
// (You can also use external URL)
var l_bgImages = [
	"image1.jpg",
        "image2.jpg",
        "image3.jpg",
        "image4.jpg",
        "image5.jpg",
        "image6.jpg",
        "image7.jpg",
        "image8.jpg",
        "image9.jpg",
        "image10.jpg",
        "image11.jpg",
        "image12.jpg",
        "image13.jpg",
        "image14.jpg",
        "image15.jpg",
        "image16.jpg",
        "image17.jpg",
        "image18.jpg",

];

// (Image-background only)
// Random background images order?
// 'true' or 'false'
var l_bgImagesRandom = true;

// (Image-background only)
// Delay between background images changes
// in milliseconds
var l_bgImageDuration = 5000;

// (Image-background only)
// Image background fade velocity
// in milliseconds
var l_bgImageFadeVelocity = 2000;

// Enable background overlay?
// 'true' or 'false'
var l_bgOverlay = true;

// Background darkening amount
// 0 for none (0%), 100 for pitch black (100%)
var l_bgDarkening = 50;

// Play music during the loading screen?
// 'true' or 'false'
var l_music = true;

// Display current music name?
// 'true' or 'false'
var l_musicDisplay = true;

// Music playlist
// Add as many youtube ids/urls or ogg files you want
// (Place the ogg files in the music folder)
// (You can also use external URL for the ogg files)
var l_musicPlaylist = [
	{ogg: "notimefnaffour.ogg", name: "Neutron - Installation Music"},
	{ogg: "fnafmusic.ogg", name: "Neutron - Installation Music"},
	{ogg: "notimefnaffour.ogg", name: "Neutron - Installation Music"},
];

// Random music order?
// 'true' or 'false'
var l_musicRandom = true;

// Music volume
// Choose a value between 0 (quietest) and 100 (loudest)
var l_musicVolume = 15;

// Enable custom messages?
// 'true' or 'false'
var l_messagesEnabled = false;

// Enter your custom messages below
var l_messages = [
	"You are not to switch classes in front of other players. Should you need to switch, go to bunks or an empty room and switch!",
	"Ensuring a Safe Environment: We are committed to maintaining a safe and inclusive environment for all members. As such, we will continue to monitor and enforce these rules and regularly review and update them as needed!",
	"Jedi takes priority in Sith fights/Lightsaber duels. Clones should NOT fire when a Sith and Jedi are Fighting!",
        "Exploiting or hacking in any form will result in an immediate ban. If you believe that your ban for Rule 4 was by accident, access our discord and provide evidence to a staff member to prove your innocence and reverse your punishment!",
	"Please note: Staff always have the final say; if they tell you to stop, you got to stop. Otherwise, you can or will be warned! NOTICE!",
	"Spamming the chat is not allowed. Continuously sending messages or playing loud or obnoxious sounds falls under this rule. This includes!",
	"You may not break character in any way, shape, or form. It is a fail and will result in a 25-minute arrest. Use OOC for Out-of-Character!",
	"The rules include RP rules and general community rules. These rules are for all players and will be referred to when disciplinary action is taken against a player!",
	"Do not spawn items that are not appropriate for the current situation. Refer to a higher-up to confirm if spawning a particular item is allowed!",
	"You may only have your weapon on safety or away during Defcon 5 or out during Defcon 4 and below!",
	"You can sneak up behind opponents and strip their weapons and communications only if they have their weapons on safety. If their weapon is off-safety, it is not possible, and you must roll above 50 to be successful!",
	"Do not disconnect, suicide, change jobs, change names, etc. to get out of a roleplay/staff situation. This will result in a harsher or additional punishment!",
        "You get promoted by doing well in events and proving yourself to your commander or fleet that you are able to command troopers and make them listen to you, and that you aren't going to mess up doing it!",
	"Do NOT FailRP (Doing something that a Clone, Jedi, Republic Ops and etc. would not do!",
	"Typical punishments for breaking a server rule will be in the order of a warning, a kick, and then a ban. If a specific rule states an alternative or immediate punishment, that will overrule the typical punishment order. For more information on the rules, please contact a member of staff!",
	"NEVER hurt a brother in any way. Never shoot or handcuff another clone trooper, Unless given orders from a commander you may cuff a “rogue” clone!",
        "Harassing staff or higher-ranking players for positions in regiments or a staff role is not allowed. If you are confused about your position or a potential promotion, contact a higher-level staff member to confirm!",
	"No offensive roleplay names or anything that is close to an offensive word in your name!",
	"everyone you see, then you will be punished for MRDM. Attempting to exploit a system within the server, for example, item duplication and/or level/money boosting, will result in a warning and ban!",
	"An individual may opt out of an event if they do not wish to participate, but may not actively attempt to stop the event outside of roleplay. No one can be forced to sit out of an event!",
        "All donations are subject to all regular server rules, donations will in no way grant any form of immunity against punishment and can be retracted if the transgressions have been sufficiently deemed as requiring such!", 
        "Jedi that are listed as Officers within their linked battalion have All the privileges of  an officer. This includes claiming rooms, accessing AOS Areas, giving PTS, etc!",
        "No RDM [Random Death Match]: The act of killing or attempting to kill a player with no roleplay reasoning behind said act!",
        "Never assault an innocent/ally. If attacked you may defend yourself. NOTE: You must be DAMAGED! (not just blinded/pushed) in order to defend yourself!",
        "Please Don't be a dick to people. Being an 'edgy cool teenager' won't get you far on this server. You will be banned. Toxicity is not tolerated!",
        "Mingeing means purposefully harming the roleplay of the server, breaking or attempting to break the server's rules in any way and generally acting like an idiot!",
        "Neutral jobs have only open comms. In addition to that maintenance droids, medical droids and bounty hunters working for the republic have secured comms  It is FailRP to ‘steal’ comms unless the staff has granted Permission!",
        "You need to listen to people that are higher rank than you. If that person is abusing their rank, let a staff member know!",
        "Donations can not be refunded, swapped or exchanged unless with explicit circumstances and discussion with the executive members of the staff team, such situations (an unforeseen issue has appeared with the product, such as a broken model!",
        "Cheating will result in an automatic or manual permanent ban. This includes abusing Gmod/source exploits with client-side scripts and convars!",
        "You must follow all Jedi Guidelines and Rules within the Jedi Order!",
        "The use of force abilities on the Venator / Base Maps is prohibited unless in training, this rule is voided if in combat or DEFCON is at III or Lower!",
        "Under no circumstances may a Jedi use a gun/grenades/stim kits. Lightsaber and Knives/fists Only!",
        "Follow all in-game guidelines, such as rules set by CG or RHC!",
        "You are not to switch classes in front of other players. Should you need to switch, go to bunks or an empty room and switch!",
        "Certain Fleet Ranks can demote and promote anyone except Jedi and only Jedi. Inform a troopers commander about a demotion or promotion every time!",
        "Regimental higher-ups may hand out regimental discords however it is not a requirement for players to join them. Any discord relating to MVG which is handed out in-game to players i.e - regimental discords, must abide by MVG’s rules!",
        "You are not allowed to set lockdown/hyperspace without permission!",
        "Please don't contact the owner(s) immediately, take it up the chain of command!"
];

// Random message order?
// 'true' or 'false'
var l_messagesRandom = true;

// Delay between message changes
// in milliseconds
var l_messagesDelay = 5000;

// Messages fade time
// in milliseconds
var l_messagesFade = 1000;

// Show errors inside Garry's Mod?
// Can be useful for finding errors
// 'true' or 'false'
var l_showErrorsIngame = true;

//==============================================================
//========================== WARNING ===========================
//==============================================================
//============ Do not edit anything below this line ============
//==============================================================
var checkConfigFile = function() {
	return true;
};
