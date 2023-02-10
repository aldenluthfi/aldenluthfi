<h1 align="center">Hi there, I'm Alden Luthfi!    👋   </h1>
<h3 align = "center">Computer Science Student at the University of Indonesia</h3>
<p align = "center"><img align="center" src="https://github-readme-stats.vercel.app/api?username=Cheesewaffly&hide=prs&show_icons=true&include_all_commits=true&theme=transparent&hide_border=true" alt="Github Stats" /></p>  
<p align = "center"><img align="center" src="https://github-readme-stats.vercel.app/api/top-langs/?username=Cheesewaffly&layout=compact&theme=transparent&card_width=415&hide_border=true" alt="Top Languages" /></p>

```python3
def interests() -> str:
    s: str = ""
  
    a: list[int] = [45, 110, 111, 32, 109, 10, 112, 112, 77, 111]
    b: list[bytes] = [b' ', b'g', b'g', b'M', b'a', b'-', b't', b'h', b'a', b'r']
    c: str = "C\niat oyne"
    d: dict[int, int] = {3: 111, 9: 45, 15: 99, 21: 116, 27: 105, 33: 67, 39: 103, 45: 10, 51: 121, 57: 46}
    e: str = "d \nhcrr- ."
    f: str = 0x694C2D65737961204D2E.to_bytes(10, 'big').decode()
    
    for i, (sa, sb, sc, sd, se, sf) in enumerate(zip(a, b, c, d, e, f)):
        s += str(chr(sa)) + sb.decode() + sc + f'{chr(d[i * 6 + 3])}' + se + sf
  
    print(s)

if __name__ == "__main__":
    interests()
```
```java
public class Skills {
    public static void main(String[] args) {
        String alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        String a = "LSBFbmdsaXNoIGFuZCBJbmRvbmVzaWFuCi0gQWRvYmUgQXBwcyAoQUUsIE";
        String b = "FJLCBQUywgYW5kIFBSKQotIFByb2dyYW1taW5nIExhbmd1YWdlcyAoSmF2";
        String c = "YSwgUHl0aG9uLCBIYXNrZWxsLCBDLCBDKysp";

        for (int i = 0; i < (a + b + c).length(); i += 4) {
            String sub = (a + b + c).substring(i, i + 4);

            int chunk = 0, mask1 = 0xFF0000, mask2 = 0xFF00, mask3 = 0xFF;

            chunk |= alphabet.indexOf(sub.charAt(0)) << 18;
            chunk |= alphabet.indexOf(sub.charAt(1)) << 12;
            chunk |= alphabet.indexOf(sub.charAt(2)) << 6;
            chunk |= alphabet.indexOf(sub.charAt(3));

            System.out.printf("%c", (chunk & mask1) >>> 16);
            System.out.printf("%c", (chunk & mask2) >>> 8);
            System.out.printf("%c", chunk & mask3);
        }
        
        System.out.print("\n");
    }
}
```

