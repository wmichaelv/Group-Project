using UnityEngine;
using System.Collections;

public class Alice_Movement : MonoBehaviour {

	public static int   playerDirection; // Store playerDirection     to Pass Around Scripts
	public static bool  playerShift;     // Store shift               to Pass Around Scripts
	public static bool  playerMouse;     // Store playerMouse         to Pass Around Scripts
	public static bool  playerAction;    // Store playerAction        to Pass Around Scripts
	public static bool  playerReverse;   // Store playerReverse       to Pass Around Scripts
	public static float playerMovSpd;    // Store playerMovementSpeed to Pass Around Scripts

	private static Animator animator;    // Store Animator
	private static bool getSR;           // Store getStateReversed
	private static bool bDash;           // Store backDash
	private static bool fDash;           // Store frontDash
	private static float horz;           // Store Horizontal Input
	private static float vert;           // Store Vertical Input
	private static Vector2 mousePos;     // Store mousePosition
	private static Vector2 objectPos;    // Store objectPosition


	// Use this for initialization

	void Start() { 
		animator = this.GetComponent<Animator>();
		getSR = false;
		bDash = false;
		fDash = false;
	}

	// Update is call once per turn
	void Update() {

		setPlayerVarValues();
		// setPlayerVariablesValues

		setPlayerMovState();
		// setMovementAnimationState

		setPlayerMovSpeed(playerMovSpd);
		// setMovementAnimationSpeed
	}

	void setPlayerVarValues() {

		horz = Input.GetAxis("Horizontal");
		
		/*********************************
		 * GetAxis horizontal direction  *
		 * 1 for right direction         *
		 *-1 for left direction          *
		 * 0 for no horizontal direction *
		 *********************************/

		vert = Input.GetAxis("Vertical");

		/********************************
		 * GetAxis vertical direction   *
		 * 1 for up direction           *
		 *-1 for bottom direction       *
		 * 0 for no vertical direction  *
		 ********************************/

		mousePos = Camera.main.ScreenToWorldPoint(Input.mousePosition);
		// Get the position of the mouse

		objectPos = animator.transform.position;
		// Get the position of the animator

		mousePos = mousePos - objectPos; 
		// Get the position of the mouse from the animator

		playerDirection = getDirection(horz, vert);
		// direction 0 = idle, no need to has 5

		playerShift = getShift();
		// shift for dashing

		playerMouse = getMouse(mousePos.x, mousePos.y, playerDirection);
		// mouse for reverse movement

		playerAction = getAction();
		// action for negate movement

		playerReverse = getReverse(playerDirection, playerMouse);
		// reverse for reversed sprite

		playerMovSpd = getMovSpeed(playerDirection, playerShift, playerMouse);
		// playerMovSpd for player's movement speed

	}

	int getDirection(float h, float v) {
		return (h != 0 || v != 0) ? ((h != 0) ? ((v != 0) ? 
			((h < 0) ? ((v < 0) ? 1 : 7) : ((v < 0) ? 3 : 9)) : 
			((h < 0) ? 4 : 6)) : ((v < 0) ? 2 : 8)) : 0;
	}

	bool getMouse(float x, float y, int d) {
		switch (d) {
		case 0: // Idle
			return true;
		case 1: // Down-Left
			return (x < 0 && y < 0) ? true : ((x > 0) ? 
				(y / x < -1) : (x / y < -1));
		case 2: // Down
			return y < 0;
		case 3: // Down-Right
			return (x > 0 && y < 0) ? true : ((x > 0) ? 
				(x / y > 1) : (y / x > 1));
		case 4: // Left
			return x < 0;
		case 6: // Right
			return x > 0;
		case 7: // Top-Left
			return (x < 0 && y > 0) ? true : ((x > 0) ? 
				(y / x > 1) : (x / y > 1));
		case 8: // Up
			return y > 0;
		case 9: // Top-Right
			return (x > 0 && y > 0) ? true : ((x > 0) ?
				(x / y < -1) : (y / x < -1));
		default:
			return true;
		}
	}

	bool getShift() {
		return Input.GetKey(KeyCode.RightShift) || Input.GetKey(KeyCode.LeftShift);
	}

	bool getAction() {
		return false; // False for now since no action is implemented yet
	}

	bool getReverse(int d, bool m) {
		switch (d) {
		case 0: // Idle
			return false;
		case 1: // Down-Left
			return m;
		case 2: // Down
			return mousePos.x < 0;
		case 3: // Down-Right
			return !m;
		case 4: // Left
			return m;
		case 6: // Right
			return !m;
		case 7: // Up-Left
			return m;
		case 8: // Up
			return mousePos.x < 0;
		case 9: // Up-Right
			return !m;
		default:
			return false;
		}
	}

	float getMovSpeed(int d, bool s, bool m) {
		return (d != 0) ? ((s) ? ((m) ? 10f : 5f) : ((m) ? 3f : 1f)) : 0f;
	}

	void setPlayerMovState() {
		// Check if Character is Processing Action
		if (playerAction) setPlayerActionMovState();
		else setPlayerNonActionMovState();
	}

	void setPlayerActionMovState() {
		// Pending for Action States
	}

	void setPlayerNonActionMovState() {
		// Check if Character is idle
		if (playerDirection == 0) setIdleMovState();
		else setPlayerMovingMovState();
	}

	void setPlayerMovingMovState() {
		// Set if Sprite needs to be reversed
		animator.transform.Rotate(0, getRotation(playerReverse), 0);
		// Check if Character is moving to position of mouse
		if (playerMouse) setPlayerForwardMovState();
		else setPlayerBackwardMovState();
	}

	void setPlayerForwardMovState() {
		// Check if Character is dashing
		if (playerShift) setForwardDashMovState();
		else setForwardWalkMovSate();
	}

	void setPlayerBackwardMovState() {
		// Check if Character is dashing
		if (playerShift) setBackwardDashMovState();
		else setBackwardWalkMovSate();
	}

	void setIdleMovState() {
		// isDashing() is to finish pre#, post# dashing animation
		if (!isDashing()) animator.Play("AliceStand");
	}

	void setForwardWalkMovSate() {
		if (!isDashing()) animator.Play("AliceWalkFront");
	}

	void setBackwardWalkMovSate() {
		if (!isDashing()) animator.Play("AliceWalkBack");
	}

	void setForwardDashMovState() {
		if (fDash) animator.Play("AliceDashFrontLoop");
		else if (!isDashing()) StartCoroutine(waitFor("AliceDashFrontStart"));
	}

	void setBackwardDashMovState() {
		if (bDash) animator.Play("AliceDashBackLoop");
		else if (!isDashing()) StartCoroutine(waitFor("AliceDashBackStart"));
	}

	int getRotation(bool r) {
		if (r)
			if (getSR) {
				return 0;
			} else {
				getSR = true;
				return 180;
			}
		else
			if (getSR) {
				getSR = false;
				return 180;
			} else {
				return 0;
			}
	}

	bool isDashing() {
		if (fDash) {
			StartCoroutine(waitFor("AliceDashFrontFinish"));
			return true;
		}
		if (bDash) {
			StartCoroutine(waitFor("AliceDashBackFinish"));
			return true;
		}
		return false;
	}

	IEnumerator waitFor(string animationName) {
		switch (animationName) {
		case "AliceDashFrontStart":
			animator.Play("AliceDashFrontStart");
			yield return StartCoroutine(WaitAndPrint(0.167F));
			fDash = true;
			break;
		case "AliceDashFrontFinish":
			animator.Play("AliceDashFrontFinish");
			yield return StartCoroutine(WaitAndPrint(0.250F));
			fDash = false;
			break;
		case "AliceDashBackStart":
			animator.Play("AliceDashBackStart");
			yield return StartCoroutine(WaitAndPrint(0.167F));
			bDash = true;
			break;
		case "AliceDashBackFinish":
			animator.Play("AliceDashBackFinish");
			yield return StartCoroutine(WaitAndPrint(0.167F));
			bDash = false;
			break;
		default:
			yield return new WaitForSeconds (0f);
			break;
		}
	}

	IEnumerator WaitAndPrint(float waitTime) {
		yield return new WaitForSeconds(waitTime);
	}

	void setPlayerMovSpeed(float mS) {
		
	if (!scrollBackgroundScript.setMapScroll())
		if (playerReverse)

		switch(playerDirection) {
		case 0: // Idle
			transform.Translate(new Vector2(0,0) * mS * Time.deltaTime);
			return;
		case 1: // Down-Left
			transform.Translate(new Vector2(1,-1) * mS * Time.deltaTime);
			return;
		case 2: // Down
			transform.Translate(new Vector2(0,-1) * mS * Time.deltaTime);
			return;
		case 3: // Down-Right
			transform.Translate(new Vector2(-1,-1) * mS * Time.deltaTime);
			return;
		case 4: // Left
			transform.Translate(new Vector2(1,0) * mS * Time.deltaTime);
			return;
		case 6: // Right
			transform.Translate(new Vector2(-1,0) * mS * Time.deltaTime);
			return;
		case 7: // Up-Left
			transform.Translate(new Vector2(1,1) * mS * Time.deltaTime);
			return;
		case 8: // Up
			transform.Translate(new Vector2(0,1) * mS * Time.deltaTime);
			return;
		case 9: // Up-Right
			transform.Translate(new Vector2(-1,1) * mS * Time.deltaTime);
			return;
		default:
			transform.Translate(new Vector2(0,0) * mS * Time.deltaTime);
			return;
		}

		else

		switch(playerDirection) {
		case 0: // Idle
			transform.Translate(new Vector2(0,0) * mS * Time.deltaTime);
			return;
		case 1: // Down-Left
			transform.Translate(new Vector2(-1,-1) * mS * Time.deltaTime);
			return;
		case 2: // Down
			transform.Translate(new Vector2(0,-1) * mS * Time.deltaTime);
			return;
		case 3: // Down-Right
			transform.Translate(new Vector2(1,-1) * mS * Time.deltaTime);
			return;
		case 4: // Left
			transform.Translate(new Vector2(-1,0) * mS * Time.deltaTime);
			return;
		case 6: // Right
			transform.Translate(new Vector2(1,0) * mS * Time.deltaTime);
			return;
		case 7: // Up-Left
			transform.Translate(new Vector2(-1,1) * mS * Time.deltaTime);
			return;
		case 8: // Up
			transform.Translate(new Vector2(0,1) * mS * Time.deltaTime);
			return;
		case 9: // Up-Right
			transform.Translate(new Vector2(1,1) * mS * Time.deltaTime);
			return;
		default:
			transform.Translate(new Vector2(0,0) * mS * Time.deltaTime);
			return;
		}

	}

}
