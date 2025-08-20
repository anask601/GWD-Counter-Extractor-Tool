GWD Counter Extractor Tool
A simple web-based tool to extract gwd-counter elements from Google Web Designer HTML code.
🚀 Quick Start

📋 How to Use
Step 1: Prepare Your HTML

Copy the complete HTML code from your Google Web Designer project
Make sure it contains <gwd-counter> elements

Step 2: Extract Counters

Paste HTML Code: Paste your GWD HTML in the input textarea
Auto-Extract: The tool automatically extracts when you paste
Manual Extract: Or click the "🔍 Extract Counters" button

Step 3: Copy Results

View Results: See extracted counters in the output area
Copy to Clipboard: Click "📋 Copy Result" button
Use Anywhere: Paste the extracted counters wherever needed

Step 4: Clear (Optional)

Click "🗑️ Clear All" to reset both input and output areas

⌨️ Keyboard Shortcuts
ShortcutActionCtrl + EnterExtract countersCtrl + CCopy results to clipboardPasteAuto-triggers extraction
📄 Input Format
Paste any HTML code containing GWD elements like this:
html<gwd-google-ad id="gwd-ad">
<gwd-pagedeck>

<!-- Your ad content -->
</gwd-pagedeck>
<gwd-counter name="hdr-embd-lnk_1"></gwd-counter>
<gwd-counter name="cta-embd-lnk_1"></gwd-counter>
<gwd-counter name="vid_start"></gwd-counter>
</gwd-google-ad>
📤 Output Format
The tool extracts counters in this clean format:
html<gwd-counter name="hdr-embd-lnk_1"></gwd-counter><gwd-counter name="cta-embd-lnk_1"></gwd-counter><gwd-counter name="vid_start"></gwd-counter>
✨ Features

🔍 Smart Detection: Finds all gwd-counter elements automatically
📱 Mobile Friendly: Works on phones, tablets, and desktop
📋 One-Click Copy: Copy results to clipboard instantly
🎯 Auto-Extract: Extracts when you paste HTML
🧹 Easy Clear: Reset everything with one click
📊 Counter Stats: Shows how many counters were found
🎨 Modern UI: Beautiful, gradient-based design

🛠️ Technical Details

No Dependencies: Pure HTML, CSS, JavaScript
Client-Side Only: No data sent to servers
Cross-Browser: Works in all modern browsers
Lightweight: Fast loading and processing

🎯 Use Cases

GWD Projects: Extract tracking counters from ads
Code Cleanup: Isolate counter elements from complex HTML
Quick Reference: Get counter lists for documentation
Bulk Processing: Handle multiple counter extractions

🔧 Troubleshooting
No Counters Found?

✅ Check if your HTML contains <gwd-counter> elements
✅ Make sure you pasted the complete HTML code
✅ Verify the HTML is properly formatted

Copy Not Working?

✅ Try selecting the text manually and using Ctrl+C
✅ Check if your browser allows clipboard access
✅ Refresh the page and try again

Mobile Issues?

✅ The tool is fully responsive
✅ Use landscape mode for better experience
✅ Tap and hold to select text on mobile

💡 Tips

Paste Complete HTML: Include the full <gwd-google-ad> structure
Check Results: Always verify the counter count matches your expectations
Save Output: Copy results immediately after extraction
Multiple Uses: Keep the tool bookmarked for repeated use

🎨 Browser Support

✅ Chrome (Recommended)
✅ Firefox
✅ Safari
✅ Edge
✅ Mobile browsers

Made for Google Web Designer developers 🚀
