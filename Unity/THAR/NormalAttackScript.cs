using UnityEngine;
using System.Collections;

public class NormalAttackScript : MonoBehaviour {

	private Vector2 objectMouse; // Store mouse position based on character
	private bool rotatedX;
	private bool rotatedY;
	private float prevRotate;
	private float currentRotate;
	private float storeGetRotationX;
	private float storeGetRotationY;
	
	// Use this for initialization
	void Start () {
		rotatedX = false;
		rotatedY = false;
		currentRotate = 0;
		prevRotate = 0;
	
	}
	
	// Update is called once per frame
	void Update () {

		//Debug.Log("prev    = " + prevRotate);

		objectMouse = Alice_Movement.mousePos;
		storeGetRotationX = getRotationX();
		storeGetRotationY = getRotationY(Alice_Movement.playerReverse);

		//Debug.Log("current = " + currentRotate);
		//Debug.Log("rotate  = " + storeGetRotationX);

		//Rotate All Child Objects
		foreach (Transform child in transform) {
			child.transform.Rotate(storeGetRotationX, storeGetRotationY, 0);
			child.particleSystem.startRotation = currentRotate * Mathf.Deg2Rad;
		}
	}


	float getRotationX() {
		currentRotate =  -Mathf.Atan2(objectMouse.y, objectMouse.x) * Mathf.Rad2Deg;

		if (prevRotate == currentRotate) {
			if (rotatedX) {
				return 0;
			} else {
				rotatedX = true;
				return currentRotate;
			}
		} else {
			
			//Rotate All Child Objects Back To Origin (0,0,0)
			foreach (Transform child in transform) {
				child.transform.Rotate(-prevRotate, 0, 0);
			}
			prevRotate = currentRotate;
			return currentRotate;
		}
	}

	float getRotationY(bool r) {

		if (r)
			if (rotatedY) {
				return 0;
			} else {
				rotatedY = true;
				return -180;
			}
		else
			if (rotatedY) {
				rotatedY = false;
				return -180;
			} else {
				return 0;
			}

	}

}