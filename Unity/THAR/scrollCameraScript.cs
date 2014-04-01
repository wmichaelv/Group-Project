using UnityEngine;
using System.Collections;

public class scrollCameraScript : MonoBehaviour {

	public static float camX;    // Store Camera x-coordinate to Pass Around Scripts
	public static float camY;    // Store Camera y-coordinate to Pass Around Scripts
	public static float camW;    // Store Camera Width to Pass Around Scripts
	public static float camH;    // Store Camera Height to Pass Around Scripts

	private static float tempH;  // Temporary Storage for switches and conditional check
	private static float plaX;   // Store Player x-coordinate
	private static float plaY;   // Store Player y-coordinate
	private static float top;    // Store Top Map Border
	private static float bottom; // Store Bottom Map Border
	private static float left;   // Store Left Map Border
	private static float right;  // Store Right Map Border

	// Use this for initialization
	void Start () {
		camH  = Camera.main.orthographicSize; // Half Width
		camW  = camH * camera.aspect;         // Half Height
		tempH = 0;
	}

	// Update is called once per frame
	void Update () {

		camH = Camera.main.orthographicSize;

		if (camH != tempH) {

			camW = camH * camera.aspect;

			top    = dataBackgroundScript.topMapBorder - camH;
			bottom = dataBackgroundScript.bottomMapBorder + camH;
			left   = dataBackgroundScript.leftMapBorder + camW;
			right  = dataBackgroundScript.rightMapBorder - camW;
			tempH  = camW;
		}

		camX = transform.position.x;
		camY = transform.position.y;

		plaX = Alice_Movement.plaX;
		plaY = Alice_Movement.plaY;

		if (setCamScroll()) scrollCam(Alice_Movement.playerDirection, Alice_Movement.playerMovSpd);
		else scrollCam(checkDirection(), Alice_Movement.playerMovSpd);
	}

	bool setCamScroll() {
		return (camY < top && camY > bottom && camX > left && camX < right);
	}

	int checkDirection() {
		switch (Alice_Movement.playerDirection) {
		case 0: // Idle
			return 0;
		case 1: // Down-Left
			return plaX > left && plaX < right ? 
				(plaY < top && plaY > bottom ? 1 : 4) : 
				(plaY < top && plaY > bottom ? 2 : 0);
		case 2: // Down
			return plaY < top && plaY > bottom ? 2 : 0;
		case 3: // Down-Right
			return plaX > left && plaX < right ? 
				(plaY < top && plaY > bottom ? 3 : 6) : 
				(plaY < top && plaY > bottom ? 2 : 0);
		case 4: // Left
			return plaX > left && plaX < right ? 4 : 0;
		case 6: // Right
			return plaX > left && plaX < right ? 6 : 0;
		case 7: // Up-Left
			return plaX > left && plaX < right ? 
				(plaY < top && plaY > bottom ? 7 : 4) : 
				(plaY < top && plaY > bottom ? 8 : 0);
		case 8: // Up
			return plaY < top && plaY > bottom ? 8 : 0;
		case 9: // Up-Right
			return plaX > left && plaX < right ? 
				(plaY < top && plaY > bottom ? 9 : 6) : 
				(plaY < top && plaY > bottom ? 8 : 0);
		default:
			return 0;
		}
	}

	void scrollCam(int d, float mS) {
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
