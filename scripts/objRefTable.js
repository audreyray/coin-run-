const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.TiledBg,
		C3.Plugins.Sprite,
		C3.Behaviors.solid,
		C3.Behaviors.scrollto,
		C3.Behaviors.Platform,
		C3.Plugins.Text,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.System.Acts.ResetEventVar,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.Sprite.Cnds.CompareInstanceVar,
		C3.Behaviors.Platform.Acts.SimulateControl,
		C3.Plugins.Sprite.Acts.SetInstanceVar,
		C3.Plugins.System.Cnds.Else
	];
};
self.C3_JsPropNameTable = [
	{TiledBackground: 0},
	{Solid: 0},
	{platforms: 0},
	{ScrollTo: 0},
	{Platform: 0},
	{player: 0},
	{coin: 0},
	{dir: 0},
	{enimies: 0},
	{score: 0},
	{number: 0},
	{barrier: 0},
	{endzone: 0}
];

self.InstanceType = {
	TiledBackground: class extends self.ITiledBackgroundInstance {},
	platforms: class extends self.ISpriteInstance {},
	player: class extends self.ISpriteInstance {},
	coin: class extends self.ISpriteInstance {},
	enimies: class extends self.ISpriteInstance {},
	score: class extends self.ITextInstance {},
	number: class extends self.ITextInstance {},
	barrier: class extends self.ISpriteInstance {},
	endzone: class extends self.ISpriteInstance {}
}