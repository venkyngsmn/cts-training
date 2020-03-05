//read integer from keybpard

import java.io.*;
class integer
{
	public static void main(String args[])throws IOException
	{
		DataInputStream dis = new DataInputStream(System.in);
		System.out.println("Enter a number");
		int a = Integer.parseInt(dis.readLine());
		System.out.println("Entered number is "+a);
	}
}