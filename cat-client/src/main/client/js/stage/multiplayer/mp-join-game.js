import { Stage, event, game, state, Container, BitmapText } from "melonjs";
import BaseTextButton from "../../util/base-text-button";
import { my_state } from "../../util/constants";
import { StateBackground } from "../state_background";
import MultiplayerManager from "../../util/multiplayer";
import { GameChooserComponent } from "./mp-choose-game";
class BackButton extends BaseTextButton {
	constructor(x, y) {
		super(x, y, {
			text: "Back",
			borderWidth: 150,
		});
	}

	onClick() {
		state.change(my_state.MULTIPLAYER_MENU);
	}
}

class MenuComponent extends Container {
	constructor() {
		super();

		// make sure we use screen coordinates
		this.floating = true;

		// always on toppest
		this.z = 10;

		// give a name
		this.name = "TitleBack";
		this.addChild(new StateBackground("JOIN GAME", false, false, true));
		this.addChild(new BackButton(5, game.viewport.height - 55));

		MultiplayerManager.get()
			.listOpenGames()
			.then((games) => {
				this.gameChooser = new GameChooserComponent(games);
				this.addChild(this.gameChooser);
			})
			.catch( (err) => {
				console.log("  ERROR can't read open games: " +err);
				state.change(my_state.MULTIPLAYER_MENU);
			});

	}
}

export default class JoinGameScreen extends Stage {
	onResetEvent() {
		this.menu = new MenuComponent();
		game.world.addChild(this.menu);

		this.handler = event.on(event.KEYUP, function (action, keyCode, edge) {
			if (!state.isCurrent(my_state.MULTIPLAYER_JOIN_GAME)) return;
			if (action === "exit") {
				state.change(my_state.MULTIPLAYER_MENU);
			}
		});
	}

	onDestroyEvent() {
		event.off(event.KEYUP, this.handler);		
		game.world.removeChild(this.menu);
	}
}
