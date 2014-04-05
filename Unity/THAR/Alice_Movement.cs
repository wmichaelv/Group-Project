using UnityEngine;
using System.Collections;

public class Alice_Movement : MonoBehaviour {

	public static int   playerDirection; // Store playerDirection     to Pass Around Scripts
	public static bool  playerShift;     // Store shift               to Pass Around Scripts
	public static bool  playerMouse;     // Store playerMouse         to Pass Around Scripts
	public static bool  playerAction;    // Store playerAction        to Pass Around Scripts
	public static bool  playerReverse;   // Store playerReverse       to Pass Around Scripts
	public static float playerMovSpd;    // Store playerMovementSpeed to Pass Around Scripts
	public static float plaX;            // Store Player x-coordinate to Pass Around Scripts
	public static float plaY;            // Store Player y-coordinate to Pass Around Scripts
	public static Vector2 mousePos;      // Store mousePosition       to Pass Around Scripts

	private static Animator animator;    // Store Animator
	private static bool getSR;           // Store getStateReversed
	private static bool bDash;           // Store backDash
	private static bool fDash;           // Store frontDash
	private static float horz;           // Store Horizontal Input
	private static float vert;           // Store Vertical Input
	private static Vector2 objectPos;    // Store objectPosition

	private static bool setMap;          //Switch
	private static float top;            // Store Top Map Border
	private static float bottom;         // Store Bottom Map Border
	private static float left;           // Store Left Map Border
	private static float right;          // Store Right Map Border

	// Use this for initialization

	void Start() { 
		animator = this.GetComponent<Animator>();
		getSR = false;
		bDash = false;
		fDash = false;
		playerReverse = false;
	}

	// Update is call once per turn
	void Update() {

		if (!setMap) {
			top    = dataBackgroundScript.topMapBorder;
			bottom = dataBackgroundScript.bottomMapBorder;
			left   = dataBackgroundScript.leftMapBorder;
			right  = dataBackgroundScript.rightMapBorder;
			setMap = true;
		}

		plaX = animator.transform.position.x;
		plaY = animator.transform.position.y;

		setPlayerVarValues();
		// setPlayerVariablesValues

		setPlayerMovState();
		// setMovementAnimationState

		setPlayerMovSpeed();
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
		
		/***********************************************************************
		 * Direction is based on numpad key 0-9                                *
		 *                                                                     *
		 * 7 8 9   =  North-West North North-East =   Up-Left   Up   Up-Right  *
		 * 4 5 6   =     West      -       East   =    Left      -    Right    *
		 * 1 2 3   =  South-West South South-East =  Down-Left Down Down-Right *
		 *   0     =             Idle             =            Idle            *
		 *                                                                     *
		 ***********************************************************************/

		return (h != 0 || v != 0) ? ((h != 0) ? ((v != 0) ? 
			((h < 0) ? ((v < 0) ? 1 : 7) : ((v < 0) ? 3 : 9)) : 
			((h < 0) ? 4 : 6)) : ((v < 0) ? 2 : 8)) : 0;
	}

	bool getMouse(float x, float y, int d) {

		/**********************************************************************
		 * To check whether movement direction is approaching mousePos or not *
		 * Mouse is based on the mousePos and the movement direction          *
		 *                                                                    *
		 **********************************************************************/

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
		//Check if Shift is pressed or not
		return Input.GetKey(KeyCode.RightShift) || Input.GetKey(KeyCode.LeftShift);
	}

	bool getAction() {
		return false; // False for now since no action is implemented yet
	}

	bool getReverse(int d, bool m) {
		//Check if sprite needs to be reversed or not
		switch (d) {
		case 0: // Idle
			return playerReverse;
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
			return playerReverse;
		}
	}

	float getMovSpeed(int d, bool s, bool m) {

		/**********************
		 * Alice Movement:    *
		 * Idle          =  0 *
		 * Foward Walk   =  3 *
		 * Backward Walk =  1 *
		 * Froward Dash  = 10 *
		 * Backward Dash =  5 *
		 *                    *
		 **********************/

		return (d != 0) ? ((s) ? ((m) ? 10f : 5f) : ((m) ? 3f : 1f)) : 0f;
	}

	void setPlayerMovState() {
		// Set if Sprite needs to be reversed
		animator.transform.Rotate(0, getRotation(playerReverse), 0);
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

		/************************************************************
		 * Rotation is by 180 degree on y axis                      *
		 * Return 180 to rotate                                     *
		 * Return 0 to keep position state                          *
		 * getSR is used to check whether rotation is needed or not *
		 *                                                          *
		 ************************************************************/
		
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

	void setPlayerMovSpeed() {
		if (playerNotNextToCorner()) movePlayer(playerDirection, playerMovSpd);
		else movePlayer(checkDirection(), playerMovSpd);
	}

	bool playerNotNextToCorner() {
		return (plaY < top && plaY > bottom && plaX > left && plaX < right);
	}

	int checkDirection() {
		switch (playerDirection) {
		case 0: // Idle
			return 0;
		case 1: // Down-Left
			return plaX > left ? 
				(plaY > bottom ? 1 : 4) : 
				(plaY > bottom ? 2 : 0);
		case 2: // Down
			return plaY > bottom ? 2 : 0;
		case 3: // Down-Right
			return plaX < right ? 
				(plaY > bottom ? 3 : 6) : 
				(plaY > bottom ? 2 : 0);
		case 4: // Left
			return plaX > left ? 4 : 0;
		case 6: // Right
			return plaX < right ? 6 : 0;
		case 7: // Up-Left
			return plaX > left ? 
				(plaY < top ? 7 : 4) : 
				(plaY < top ? 8 : 0);
		case 8: // Up
			return plaY < top ? 8 : 0;
		case 9: // Up-Right
			return plaX < right ? 
				(plaY < top ? 9 : 6) : 
				(plaY < top ? 8 : 0);
		default:
			return 0;
		}
	}

	void movePlayer(int d, float mS) {

		if (playerReverse)

		switch(d) {
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

		switch(d) {
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
