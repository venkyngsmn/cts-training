import java.io.*;
class stringg
{
	public static void main(String args[])throws IOException
	{
		DataInputStream dis = new DataInputStream(System.in);
		System.out.println("Enter your name");
		String a = dis.readLine();
		System.out.println("You name is "+a);
	}
}