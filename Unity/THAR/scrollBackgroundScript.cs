using UnityEngine;
using System.Collections;

public class scrollBackgroundScript : MonoBehaviour {

	public static float topMapBorder;    // Store topMapBorder     to Pass Around Scripts
	public static float leftMapBorder;   // Store leftMapBorder    to Pass Around Scripts
	public static float bottomMapBorder; // Store bottomMapBorder  to Pass Around Scripts
	public static float rightMapBorder;  // Store rightMapBorder   to Pass Around Scripts
	public static float mapX;            // Store map x-coordinate to Pass Around Scripts
	public static float mapY;            // Store map y-coordinate to Pass Around Scripts

	// Use this for initialization
	
	void Start () {

		setMapBorder();
	}

	void setMapBorder() {

		bottomMapBorder = transform.Find("BottomRightCorner").transform.position.y;
		rightMapBorder = transform.Find("BottomRightCorner").transform.position.x;
		topMapBorder = transform.Find("TopLeftCorner").transform.position.y;
		leftMapBorder = transform.Find("TopLeftCorner").transform.position.x;

		Debug.Log(bottomMapBorder);
		Debug.Log(rightMapBorder);
		Debug.Log(topMapBorder);
		Debug.Log(leftMapBorder);
	}



	// Update is called once per frame
	void Update () {

		mapX = transform.position.x;
		mapY = transform.position.y;

		if (setMapScroll()) scrollMap(Alice_Movement.playerMovSpd);
	}

	public static bool setMapScroll() {

		if (mapY > bottomMapBorder && 
			mapY < topMapBorder &&
			mapX > leftMapBorder && 
			mapX < rightMapBorder)
			return true;
		else return false;
	}

	void scrollMap(float mS) {
		switch(Alice_Movement.playerDirection) {
		case 0: // Idle
			transform.Translate(new Vector2(0,0) * mS * Time.deltaTime);
			return;
		case 1: // Down-Left
			transform.Translate(new Vector2(1,1) * mS * Time.deltaTime);
			return;
		case 2: // Down
			transform.Translate(new Vector2(0,1) * mS * Time.deltaTime);
			return;
		case 3: // Down-Right
			transform.Translate(new Vector2(-1,1) * mS * Time.deltaTime);
			return;
		case 4: // Left
			transform.Translate(new Vector2(1,0) * mS * Time.deltaTime);
			return;
		case 6: // Right
			transform.Translate(new Vector2(-1,0) * mS * Time.deltaTime);
			return;
		case 7: // Up-Left
			transform.Translate(new Vector2(1,-1) * mS * Time.deltaTime);
			return;
		case 8: // Up
			transform.Translate(new Vector2(0,-1) * mS * Time.deltaTime);
			return;
		case 9: // Up-Right
			transform.Translate(new Vector2(-1,-1) * mS * Time.deltaTime);
			return;
		default:
			transform.Translate(new Vector2(0,0) * mS * Time.deltaTime);
			return;
		}
	}

}
