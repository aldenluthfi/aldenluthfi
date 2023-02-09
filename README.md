<h1 align="center">Hi there, I'm Alden Luthfi!    👋   </h1>
<h3 align = "center">Computer Science Student at the University of Indonesia</h3>
<p align = "left"><img align="center" src="https://github-readme-stats.vercel.app/api?username=Cheesewaffly&hide=prs&show_icons=true&include_all_commits=true&theme=transparent&hide_border=true" alt="Github Stats" /></p>  
<p align = "left"><img align="center" src="https://github-readme-stats.vercel.app/api/top-langs/?username=Cheesewaffly&layout=compact&theme=transparent&card_width=1000&hide_border=true&exclude_repo=Sarwacatur" alt="Top Languages" /></p>

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
```
```java
public static void skills() {
    String alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

    String a = "LSBFbmdsaXNoIGFuZCBJbmRvbmVzaWFuCi0gQWRvYmUgQXBwcyAoQUUsIE";
    String b = "FJLCBQUywgYW5kIFBSKQotIFByb2dyYW1taW5nIExhbmd1YWdlcyAoSmF2";
    String c = "YSwgUHl0aG9uLCBIYXNrZWxsLCBDLCBDKysp";

    String b64 = a + b + c, s = "";

    for (int i = 0; i < b64.length(); i += 4) {
        String sub = b64.substring(i, i + 4);

        int chunk = 0;

        chunk |= alphabet.indexOf(sub.charAt(0)) << 18;
        chunk |= alphabet.indexOf(sub.charAt(1)) << 12;
        chunk |= alphabet.indexOf(sub.charAt(2)) << 6;
        chunk |= alphabet.indexOf(sub.charAt(3));

        int mask1 = 0xFF0000, mask2 = 0xFF00, mask3 = 0xFF;

        s += (char) ((chunk & mask1) >>> 16);
        s += (char) ((chunk & mask2) >>> 8);
        s += (char) (chunk & mask3);
    }

    System.out.println(s);
}
```

