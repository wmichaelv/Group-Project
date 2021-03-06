﻿using UnityEngine;
using System.Collections;

public class playerControlScript : MonoBehaviour {

	public static int   playerDirection; // Store playerDirection     to Pass Around Scripts
	public static bool  playerShift;     // Store shift               to Pass Around Scripts
	public static bool  playerMouse;     // Store playerMouse         to Pass Around Scripts
	public static bool  playerAction;    // Store playerAction        to Pass Around Scripts
	public static float plaX;            // Store Player x-coordinate to Pass Around Scripts
	public static float plaY;            // Store Player y-coordinate to Pass Around Scripts
	public static Vector2 mousePos;      // Store mousePosition       to Pass Around Scripts

	private static float horz;           // Store Horizontal Input
	private static float vert;           // Store Vertical Input
	private static Vector2 objectPos;    // Store objectPosition

	// Use this for initialization
	void Start () {}
	
	// Update is called once per frame
	void Update () {

		plaX = transform.position.x;
		plaY = transform.position.y;

		setPlayerVarValues();
		// setPlayerVariablesValues
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

		objectPos = transform.position;
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

}
