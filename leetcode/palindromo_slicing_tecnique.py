class Solution:
    def isPalindrome(self, x: int) -> bool:
        strNum = str(x)
        invertNum = strNum[::-1] # esto es para coger la cadena y darle la vuelta. es con la tecnica del SLICING

        if (strNum == invertNum):
            return True
        else:
            return False