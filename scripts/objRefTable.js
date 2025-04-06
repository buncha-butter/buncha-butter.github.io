const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.TiledBg,
		C3.Plugins.Sprite,
		C3.Plugins.Text,
		C3.Plugins.Button,
		C3.Behaviors.Anchor,
		C3.Plugins.Mouse,
		C3.Plugins.Mouse.Cnds.IsOverObject,
		C3.Plugins.Sprite.Acts.SetAnimFrame,
		C3.Plugins.System.Cnds.Else,
		C3.Plugins.Button.Cnds.OnClicked,
		C3.Plugins.System.Acts.NextPrevLayout,
		C3.Plugins.Sprite.Acts.SetVisible
	];
};
self.C3_JsPropNameTable = [
	{BG: 0},
	{Sprite: 0},
	{boat: 0},
	{gamestarttext1: 0},
	{STARTBUTTON: 0},
	{josef: 0},
	{isabell: 0},
	{Sprite2: 0},
	{mahmoud: 0},
	{chosecharactertext1: 0},
	{chosecharactertext2: 0},
	{chosecharactertext3: 0},
	{Anchor: 0},
	{DIOLOUGE: 0},
	{Mouse: 0}
];

self.InstanceType = {
	BG: class extends self.ITiledBackgroundInstance {},
	Sprite: class extends self.ISpriteInstance {},
	boat: class extends self.ISpriteInstance {},
	gamestarttext1: class extends self.ITextInstance {},
	STARTBUTTON: class extends self.IButtonInstance {},
	josef: class extends self.ISpriteInstance {},
	isabell: class extends self.ISpriteInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	mahmoud: class extends self.ISpriteInstance {},
	chosecharactertext1: class extends self.ITextInstance {},
	chosecharactertext2: class extends self.ITextInstance {},
	chosecharactertext3: class extends self.ITextInstance {},
	DIOLOUGE: class extends self.ITextInstance {},
	Mouse: class extends self.IInstance {}
}