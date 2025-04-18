const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Text,
		C3.Behaviors.Anchor,
		C3.Plugins.TiledBg,
		C3.Plugins.Sprite,
		C3.Plugins.Button,
		C3.Plugins.Mouse,
		C3.Plugins.Keyboard,
		C3.Plugins.List,
		C3.Plugins.progressbar,
		C3.Plugins.Audio,
		C3.Plugins.advert,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.System.Exps.random,
		C3.Plugins.System.Cnds.Compare,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.System.Cnds.Else,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.Sprite.Acts.SetPosToObject,
		C3.Plugins.Button.Cnds.OnClicked,
		C3.Plugins.System.Acts.NextPrevLayout,
		C3.Plugins.Sprite.Acts.SetVisible,
		C3.Plugins.System.Cnds.IsGroupActive,
		C3.Plugins.progressbar.Exps.Maximum,
		C3.Plugins.progressbar.Acts.SetMaximum,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.progressbar.Acts.SetProgress,
		C3.Plugins.System.Cnds.CompareBetween,
		C3.Plugins.Sprite.Acts.SetAnimFrame,
		C3.Plugins.Text.Acts.SetPos,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.Audio.Acts.StopAll,
		C3.Plugins.Text.Acts.TypewriterText,
		C3.Plugins.Sprite.Acts.SetAnim
	];
};
self.C3_JsPropNameTable = [
	{text_shop1_food: 0},
	{text_shop1_Gas: 0},
	{text_shop1_water: 0},
	{text_shop1_reparing_tools: 0},
	{text_shop1_money: 0},
	{shop_T1_F: 0},
	{shop_T1_W: 0},
	{shop_T1_G: 0},
	{shop_T1_BR: 0},
	{text_shop1_YI: 0},
	{text_shop1_foodT: 0},
	{text_shop1_waterT: 0},
	{text_shop1_GasT: 0},
	{text_shop1_reparing_toolsT: 0},
	{text_shop1_moneyT: 0},
	{SHOP_controls: 0},
	{chose_character_text_isabell: 0},
	{map_miles: 0},
	{map_screen_controls_text: 0},
	{chose_character_text_joesf: 0},
	{map_miles_josef: 0},
	{gamestarttext1: 0},
	{chose_character_text_mahmoud: 0},
	{end_winT: 0},
	{death_1: 0},
	{main_screen_controls: 0},
	{Anchor: 0},
	{character_select_diolouge: 0},
	{BG: 0},
	{water1: 0},
	{boat: 0},
	{STARTBUTTON: 0},
	{josef: 0},
	{isabell: 0},
	{mahmoud: 0},
	{Mouse: 0},
	{character_select_box: 0},
	{Keyboard: 0},
	{pixel_art_large: 0},
	{List: 0},
	{pixel_art_large2: 0},
	{pixel_art_large3: 0},
	{Sprite: 0},
	{Sprite2: 0},
	{ProgressBar: 0},
	{shopStand: 0},
	{bob: 0},
	{Sprite4: 0},
	{pixilframe: 0},
	{pixilframe2: 0},
	{event_Spot: 0},
	{Sprite3: 0},
	{NOGAS: 0},
	{event_Spot2: 0},
	{Audio: 0},
	{Text: 0},
	{MobileAdvert: 0},
	{ADS: 0},
	{Sprite5: 0},
	{Sprite6: 0},
	{mainScreen_sarcastic_item_text: 0},
	{end_2: 0},
	{char_select_controls: 0},
	{text_shop1_healthT: 0},
	{text_shop1_health: 0},
	{random_insult: 0},
	{character_select: 0},
	{chosen_character: 0},
	{money: 0},
	{rations: 0},
	{repairKit: 0},
	{SHARKS: 0},
	{gas: 0},
	{GO_BOAT: 0},
	{ROCKS: 0},
	{TOWN: 0},
	{distance_: 0},
	{speed_boat: 0},
	{Cevent: 0},
	{eventPickr: 0},
	{CHESTS: 0},
	{random_Item: 0},
	{health: 0},
	{selected_shop1: 0}
];

self.InstanceType = {
	text_shop1_food: class extends self.ITextInstance {},
	text_shop1_Gas: class extends self.ITextInstance {},
	text_shop1_water: class extends self.ITextInstance {},
	text_shop1_reparing_tools: class extends self.ITextInstance {},
	text_shop1_money: class extends self.ITextInstance {},
	shop_T1_F: class extends self.ITextInstance {},
	shop_T1_W: class extends self.ITextInstance {},
	shop_T1_G: class extends self.ITextInstance {},
	shop_T1_BR: class extends self.ITextInstance {},
	text_shop1_YI: class extends self.ITextInstance {},
	text_shop1_foodT: class extends self.ITextInstance {},
	text_shop1_waterT: class extends self.ITextInstance {},
	text_shop1_GasT: class extends self.ITextInstance {},
	text_shop1_reparing_toolsT: class extends self.ITextInstance {},
	text_shop1_moneyT: class extends self.ITextInstance {},
	SHOP_controls: class extends self.ITextInstance {},
	chose_character_text_isabell: class extends self.ITextInstance {},
	map_miles: class extends self.ITextInstance {},
	map_screen_controls_text: class extends self.ITextInstance {},
	chose_character_text_joesf: class extends self.ITextInstance {},
	map_miles_josef: class extends self.ITextInstance {},
	gamestarttext1: class extends self.ITextInstance {},
	chose_character_text_mahmoud: class extends self.ITextInstance {},
	end_winT: class extends self.ITextInstance {},
	death_1: class extends self.ITextInstance {},
	main_screen_controls: class extends self.ITextInstance {},
	character_select_diolouge: class extends self.ITextInstance {},
	BG: class extends self.ITiledBackgroundInstance {},
	water1: class extends self.ISpriteInstance {},
	boat: class extends self.ISpriteInstance {},
	STARTBUTTON: class extends self.IButtonInstance {},
	josef: class extends self.ISpriteInstance {},
	isabell: class extends self.ISpriteInstance {},
	mahmoud: class extends self.ISpriteInstance {},
	Mouse: class extends self.IInstance {},
	character_select_box: class extends self.ISpriteInstance {},
	Keyboard: class extends self.IInstance {},
	pixel_art_large: class extends self.ISpriteInstance {},
	List: class extends self.IListInstance {},
	pixel_art_large2: class extends self.ISpriteInstance {},
	pixel_art_large3: class extends self.ISpriteInstance {},
	Sprite: class extends self.ISpriteInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	ProgressBar: class extends self.IProgressBarInstance {},
	shopStand: class extends self.ISpriteInstance {},
	bob: class extends self.ISpriteInstance {},
	Sprite4: class extends self.ISpriteInstance {},
	pixilframe: class extends self.ISpriteInstance {},
	pixilframe2: class extends self.ISpriteInstance {},
	event_Spot: class extends self.ISpriteInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	NOGAS: class extends self.ITextInstance {},
	event_Spot2: class extends self.ISpriteInstance {},
	Audio: class extends self.IInstance {},
	Text: class extends self.ITextInstance {},
	MobileAdvert: class extends self.IInstance {},
	ADS: class extends self.IButtonInstance {},
	Sprite5: class extends self.ISpriteInstance {},
	Sprite6: class extends self.ISpriteInstance {},
	mainScreen_sarcastic_item_text: class extends self.ITextInstance {},
	end_2: class extends self.ITextInstance {},
	char_select_controls: class extends self.ITextInstance {},
	text_shop1_healthT: class extends self.ITextInstance {},
	text_shop1_health: class extends self.ITextInstance {}
}