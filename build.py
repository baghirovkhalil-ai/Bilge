# index.html + css + js → dist/bilge.html (tək fayl, Artifact üçün)
import re, pathlib
root = pathlib.Path(__file__).parent
h = (root/"index.html").read_text()
h = h.replace('<link rel="stylesheet" href="css/styles.css">', "<style>\n" + (root/"css/styles.css").read_text() + "\n</style>")
h = re.sub(r'<script src="(js/[^"]+)"></script>', lambda m: "<script>\n" + (root/m.group(1)).read_text().replace("</script", "<\\/script") + "\n</script>", h)
(root/"dist").mkdir(exist_ok=True); (root/"dist/bilge.html").write_text(h)
print(len(h))
