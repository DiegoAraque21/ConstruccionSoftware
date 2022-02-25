/*
Basic Motion affecting the transformation of an object

Diego Araque
2022-02-23
*/

using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SimpleMotion : MonoBehaviour
{
    [SerializeField] float speed = 0.2f;
    Vector3 move;
    // Start is called before the first frame update
    void Start()
    {

    }

    // Update is called once per frame
    void Update()
    {
        // Read the input from the keyboard or gamepad
        move.x = Input.GetAxis("Horizontal");
        move.y = Input.GetAxis("Vertical");
        //Apply the new data to the object transformation
        transform.Translate(move * speed * Time.deltaTime);
    }
}
