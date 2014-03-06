using UnityEngine;
using System.Collections;

public class Alice_Movement : MonoBehaviour {

	private Animator animator;
	private bool getSR; //getStateReversed

	// Use this for initialization
	void Start() { 
		animator = this.GetComponent<Animator>();
		getSR = false;
	}

	/* 

		Update is called once per frame

		Basic Movement Keys:

		direction 0 = idle, no need to has 5
		shift for dashing
		mouse for reverse movement
		action for negate movement
		reverse for reversed sprite

	*/

	void Update() {

		var horizontal = Input.GetAxis("Horizontal");
		var vertical = Input.GetAxis("Vertical");

		Vector2 v2Pos = Camera.main.ScreenToWorldPoint(Input.mousePosition);
		Vector2 objectPos = animator.transform.position;

		v2Pos = v2Pos - objectPos; //Mouse - Object

		int direction = getDirection(horizontal, vertical);
		bool shift = getShift();
		bool mouse = getMouse(v2Pos.x, v2Pos.y, direction);
		bool reverse = getReverse(direction, mouse);

		setMovState(direction, shift, mouse, false, reverse);
	}

	int getDirection(float h, float v) {
		return (h != 0 || v != 0) ? ((h != 0) ? ((v != 0) ? 
			((h < 0) ? ((v < 0) ? 1 : 7) : ((v < 0) ? 3 : 9)) : 
			((h < 0) ? 4 : 6)) : ((v < 0) ? 2 : 8)) : 0;
	}

	bool getMouse(float x, float y, int d) {
		switch (d) {
			case 0:
				return true;
			case 1: //Down-Left
				return (x < 0 && y < 0) ? true : ((x > 0) ? 
					(y / x < -1) : (x / y < -1));
			case 2: //Down
				return y < 0;
			case 3: //Down-Right
				return (x > 0 && y < 0) ? true : ((x > 0) ? 
					(x / y > 1) : (y / x > 1));
			case 4: //Left
				return x < 0;
			case 6: //Right
				return x > 0;
			case 7: //Top-Left
				return (x < 0 && y > 0) ? true : ((x > 0) ? 
					(y / x > 1) : (x / y > 1));
			case 8: //Up
				return y > 0;
			case 9: //Top-Right
				return (x > 0 && y > 0) ? true : ((x > 0) ?
					(x / y < -1) : (y / x < -1));
			default:
				return true;
		}
	}

	bool getShift() {
		return Input.GetKey(KeyCode.RightShift) || Input.GetKey(KeyCode.LeftShift);
	}

	bool getReverse(int d, bool m) {
		switch (d) {
			case 0:
				return false;
			case 1: //Down-Left
				return m;
			case 2: //Down
				return false;
			case 3: //Down-Right
				return !m;
			case 4: //Left
				return m;
			case 6: //Right
				return !m;
			case 7: //Up-Left
				return m;
			case 8: //Up
				return false;
			case 9: //Up-Right
				return !m;
			default:
				return false;
		}
	}

	//animator.Play("AliceWalkFront");
	//animator.Play("AliceDashFront");
	//animator.Play("AliceWalkBack");
	//animator.Play("AliceDashBack");
	//animator.Play("AliceStand");

	void setMovState(int d, bool s, bool m, bool a, bool r) {
		if (!a) {
			if (d != 0) {
				if (m) {
					if (s) {
						animator.transform.Rotate(0, getRotation(r), 0);
						animator.Play("AliceDashFront");
					} else {
						animator.transform.Rotate(0, getRotation(r), 0);
						animator.Play("AliceWalkFront");
					}
				} else {
					if (s) {
						animator.transform.Rotate(0, getRotation(r), 0);
						animator.Play("AliceDashBack");
					} else {
						animator.transform.Rotate(0, getRotation(r), 0);
						animator.Play("AliceWalkBack");
					}
				}
			} else {
				animator.Play("AliceStand");
			}
		} else {
			return; //action animation pending here :x
		}
	}

	int getRotation(bool r) {
		if (r) {
			if (getSR) {
				return 0;
			} else {
				getSR = true;
				return 180;
			}
		} else {
			if (getSR) {
				getSR = false;
				return 180;
			} else {
				return 0;
			}
		}
	}
}
