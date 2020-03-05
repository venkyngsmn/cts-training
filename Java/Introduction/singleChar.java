//how to read single charater from keyboard

import java.io.*;
class singleChar
{
	public static void main(String args[])throws IOException
	{
		DataInputStream dis = new DataInputStream(System.in);
		System.out.println("Enter a single character");
		char x = (char)dis.read();
		System.out.println("My Initial is : "+x);
	}
}

/* 4 ways to read the user input

i) COMPILE TIME
ii) RUNTIME
	1. DataInputStream
	2. BufferReader
	3. Scanner
	4. Console

*/