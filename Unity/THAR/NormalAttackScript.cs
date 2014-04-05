using UnityEngine;
using System.Collections;

public class NormalAttackScript : MonoBehaviour {

	private Vector2 objectMouse; // Store mouse position based on character 
	private bool hasReversed;
	private float prevRotate;
	private float currentRotate;
	private float storeGetRotation;
	
	// Use this for initialization
	void Start () {
		hasReversed = false;
		currentRotate = 0;
		prevRotate = 0;
	
	}
	
	// Update is called once per frame
	void Update () {

		//Debug.Log("prev    = " + prevRotate);

		storeGetRotation = getRotation();

		//Debug.Log("current = " + currentRotate);
		//Debug.Log("rotate  = " + storeGetRotation);

		//Rotate All Child Objects
		objectMouse = Alice_Movement.mousePos;
		foreach (Transform child in transform) {
			child.transform.Rotate(storeGetRotation, 0, 0);
		}
	}

	float getRotation() {
		currentRotate =  -Mathf.Atan2(objectMouse.y, objectMouse.x) *  Mathf.Rad2Deg;

		if (prevRotate == currentRotate) {
			if (hasReversed) {
				return 0;
			} else {
				hasReversed = true;
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

}