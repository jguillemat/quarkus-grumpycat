import { Sprite, Body, Rect, collision, game, level, Vector2d, timer } from "melonjs";
import { my_collision_types } from "../util/constants";
import GlobalGameState from "../util/global-game-state";
import { BaseWeapon } from "./base-weapon";
import ExplosionEntity from "./explosion";

/**
 * Magic FireSpin: A firespin around your player's body. Anybody who is coming
 * too close to you will get burned.
 */
export default class MagicFirespin extends BaseWeapon {
	VELOCITY = 0.5;
	isStopped = false;

	constructor(owner, x, y) {
		super(x * 32 + 16, y * 32 + 16, {
			width: 100,
			height: 100,
			image: "magic-firespin",
			framewidth: 100,
			frameheight: 100,
			anchorPoint: new Vector2d(0.5, 0.5),
		});

		this.owner = owner;

		this.body.addShape(new Rect(28, 32, 34, 30));
		this.alwaysUpdate = true;

		this.addAnimation(
			"spin",
			[
				0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44,
				45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61,
			],
			24
		);

		this.setCurrentAnimation("spin");
		this.timerId = timer.setTimeout(
			() => {
				this.isStopped = true;
				game.world.removeChild(this);
				this.owner.spell = null;
			},
			GlobalGameState.magicDurationTime,
			true
		);

		this.isExploding = true;
		this.currentStep = 0;
		this.maxSteps = 45;
		this.radius = 48;
		this.maxHits = 5;
		//this.scale(2, 2);
	}

	update(dt) {
		if (!this.isStopped && !GlobalGameState.isGameOver) {
			let x = this.radius * Math.cos(2 * Math.PI * this.currentStep / this.maxSteps);
			let y = this.radius * Math.sin(2 * Math.PI * this.currentStep / this.maxSteps);

			this.pos.x = this.owner.pos.x + x;
			this.pos.y = this.owner.pos.y + y;
			this.currentStep++;
			if (this.currentStep >= this.maxSteps) this.currentStep = 0;
		}
		return super.update(dt);
	}

	onCollision(response, other) {
		if (other.body.collisionType === collision.types.ENEMY_OBJECT && !other.isStunned && !other.isDead) {
			this.maxHits--;
			if (this.maxHits <= 0) {
				this.isStopped = true;
				game.world.removeChild(this);
				this.owner.spell = null;
			}
		}
	}

	destroy() {
		if (this.timerId !== undefined && this.timerId !== 0) {
			timer.clearTimeout(this.timerId);
		}
		super.destroy();
	}
}