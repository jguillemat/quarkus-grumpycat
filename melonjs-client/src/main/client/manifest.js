// a melonJS data manifest
// note : this is not a webpack manifest
const DataManifest = [
	// screen controls texture map
	{
		name: "screen-controls",
		type: "image",
		src: "./data/img/screen-controls.png",
	},
	{
		name: "screen-controls",
		type: "json",
		src: "./data/img/screen-controls.json",
	},

	/* Bitmap Text */
	{
		name: "24Outline",
		type: "image",
		src: "./data/fnt/24Outline.png",
	},
	{
		name: "24Outline",
		type: "binary",
		src: "./data/fnt/24Outline.fnt",
	},
	/* Bitmap Text */
	{
		name: "12Outline",
		type: "image",
		src: "./data/fnt/12Outline.png",
	},
	{
		name: "12Outline",
		type: "binary",
		src: "./data/fnt/12Outline.fnt",
	},

	/* Bitmap Text */
	{
		name: "18Outline",
		type: "image",
		src: "./data/fnt/18Outline.png",
	},
	{
		name: "18Outline",
		type: "binary",
		src: "./data/fnt/18Outline.fnt",
	},

	/* Bitmap Text */
	{
		name: "ArialFancy",
		type: "image",
		src: "./data/fnt/arialfancy.png",
	},
	{
		name: "ArialFancy",
		type: "binary",
		src: "./data/fnt/arialfancy.fnt",
	},

	/* Bitmap Text */
	{
		name: "Shadow",
		type: "image",
		src: "./data/fnt/Shadow.png",
	},
	{
		name: "Shadow",
		type: "binary",
		src: "./data/fnt/Shadow.fnt",
	},

	{
		name: "grumpy_cat_left",
		type: "image",
		src: "./data/img/grumpy_cat_left.png",
	},

	{
		name: "grumpy_cat_right",
		type: "image",
		src: "./data/img/grumpy_cat_right.png",
	},

	{
		name: "title",
		type: "image",
		src: "./data/img/GrumpyCat-Title.png",
	},

	{
		name: "explosion",
		type: "image",
		src: "./data/img/explosion4.png",
	},
	{
		name: "spider-red",
		type: "image",
		src: "./data/img/spider-red.png",
	},

	{
		name: "animals-walk",
		type: "image",
		src: "./data/img/animals-walk.png",
	},
	
	{
		name: "bat", type: "image", src: "./data/img/32x32-bat-sprite.png",
	},

	{
		name: "golem-walk",
		type: "image",
		src: "./data/img/golem-walk.png",
	},

	{
		name: "terrain",
		type: "image",
		src: "./data/img/terrain.png",
	},
	{
		name: "BombExploding",
		type: "image",
		src: "./data/img/BombExploding.png",
	},
	{
		name: "sensa_jaa",
		type: "image",
		src: "./data/img/sensa_jaa.png",
	},
	{
		name: "sensa_nee",
		type: "image",
		src: "./data/img/sensa_nee.png",
	},

	{
		name: "sensa_grass",
		type: "image",
		src: "./data/img/sensa_grass.jpeg",
	},

	{
		name: "player",
		type: "image",
		src: "./data/img/player.png",
	},

	{
		name: "cat_left",
		type: "image",
		src: "./data/img/cat_left.png",
	},
	{
		name: "cat_right",
		type: "image",
		src: "./data/img/cat_right.png",
	},

	// magic & effects
	{ name: "magic-bolt", type: "image", src: "./data/img/effects/1_magicspell_spritesheet.png" },
	{ name: "magic-hit", type: "image", src: "./data/img/effects/5_magickahit_spritesheet.png" },
	{ name: "magic-nebula", type: "image", src: "./data/img/effects/12_nebula_spritesheet.png" },
	{ name: "magic-firespin", type: "image", src: "./data/img/effects/7_firespin_spritesheet.png" },
	{ name: "protection-circle", type: "image", src: "./data/img/effects/8_protectioncircle_spritesheet.png" },
	{ name: "magic-vortex", type: "image", src: "./data/img/effects/13_vortex_spritesheet.png" },

	// open a chest anim
	{ name: "open-chest", type: "image", src: "./data/img/chest-sheet.png" },

	// level previews
	{ name: "Level1", type: "image", src: "./data/map/Level1.png" },
	{ name: "Level2", type: "image", src: "./data/map/Level2.png" },
	{ name: "Level3", type: "image", src: "./data/map/Level3.png" },
	{ name: "Level4", type: "image", src: "./data/map/Level4.png" },
	{ name: "Level5", type: "image", src: "./data/map/Level5.png" },
	{ name: "Level6", type: "image", src: "./data/map/Level6.png" },

	// multiplayer
	{ name: "mp1", type: "image", src: "./data/map/mp_arena.png" },
	{ name: "mp2", type: "image", src: "./data/map/mp_golems.png" },
];

export default DataManifest;
