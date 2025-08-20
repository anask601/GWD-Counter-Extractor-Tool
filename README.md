# GWD Counter Extractor Tool

A simple web-based tool to extract `gwd-counter` elements from Google Web Designer HTML code.

## 🚀 Quick Start

## 📋 How to Use

### Step 1: Prepare Your HTML

- Copy the complete HTML code from your Google Web Designer project
- Make sure it contains `<gwd-counter>` elements

### Step 2: Extract Counters

1. **Paste HTML Code**: Paste your GWD HTML in the input textarea
2. **Auto-Extract**: The tool automatically extracts when you paste
3. **Manual Extract**: Or click the "🔍 Extract Counters" button

### Step 3: Copy Results

1. **View Results**: See extracted counters in the output area
2. **Copy to Clipboard**: Click "📋 Copy Result" button
3. **Use Anywhere**: Paste the extracted counters wherever needed

### Step 4: Clear (Optional)

- Click "🗑️ Clear All" to reset both input and output areas

## ⌨️ Keyboard Shortcuts

| Shortcut       | Action                    |
| -------------- | ------------------------- |
| `Ctrl + Enter` | Extract counters          |
| `Ctrl + C`     | Copy results to clipboard |
| `Paste`        | Auto-triggers extraction  |

## 📄 Input Format

Paste any HTML code containing GWD elements like this:

```html
<gwd-google-ad id="gwd-ad">
  <gwd-pagedeck>
    <!-- Your ad content -->
  </gwd-pagedeck>
  <gwd-counter name="hdr-embd-lnk_1"></gwd-counter>
  <gwd-counter name="cta-embd-lnk_1"></gwd-counter>
  <gwd-counter name="vid_start"></gwd-counter>
</gwd-google-ad>
```

## 📤 Output Format

The tool extracts counters in this clean format:

```html
<gwd-counter name="hdr-embd-lnk_1"></gwd-counter
><gwd-counter name="cta-embd-lnk_1"></gwd-counter
><gwd-counter name="vid_start"></gwd-counter>
```

## ✨ Features

- **🔍 Smart Detection**: Finds all `gwd-counter` elements automatically
- **📱 Mobile Friendly**: Works on phones, tablets, and desktop
- **📋 One-Click Copy**: Copy results to clipboard instantly
- **🎯 Auto-Extract**: Extracts when you paste HTML
- **🧹 Easy Clear**: Reset everything with one click
- **📊 Counter Stats**: Shows how many counters were found
- **🎨 Modern UI**: Beautiful, gradient-based design

## 🛠️ Technical Details

- **No Dependencies**: Pure HTML, CSS, JavaScript
- **Client-Side Only**: No data sent to servers
- **Cross-Browser**: Works in all modern browsers
- **Lightweight**: Fast loading and processing

## 🎯 Use Cases

- **GWD Projects**: Extract tracking counters from ads
- **Code Cleanup**: Isolate counter elements from complex HTML
- **Quick Reference**: Get counter lists for documentation
- **Bulk Processing**: Handle multiple counter extractions


### No Counters Found?

- ✅ Check if your HTML contains `<gwd-counter>` elements
- ✅ Make sure you pasted the complete HTML code
- ✅ Verify the HTML is properly formatted


### ✅ **Output Display** 
- Shows **all counters normally** (no visual highlighting)
- Clean, plain text output like before
- Easy to read and copy

### ⚠️ **Warning Only**
- **Detects NaN** counters in the background
- **Shows warning message** when found
- **No visual changes** to the actual counter output

### 📋 **Example:**

**Input HTML with NaN:**
```html
<gwd-counter name="vid_start"></gwd-counter>
<gwd-counter name="vid-length_NaN"></gwd-counter>
<gwd-counter name="vid_end"></gwd-counter>
```

**Output (clean as before):**
```html
<gwd-counter name="vid_start"></gwd-counter><gwd-counter name="vid-length_NaN"></gwd-counter><gwd-counter name="vid_end"></gwd-counter>
```

**Warning Message:**
```
⚠️ Warning: Found counters with "NaN" values. These may cause tracking issues!
```


### Copy Not Working?

- ✅ Try selecting the text manually and using Ctrl+C
- ✅ Check if your browser allows clipboard access
- ✅ Refresh the page and try again

### Mobile Issues?

- ✅ The tool is fully responsive
- ✅ Use landscape mode for better experience
- ✅ Tap and hold to select text on mobile

## 💡 Tips

1. **Paste Complete HTML**: Include the full `<gwd-google-ad>` structure
2. **Check Results**: Always verify the counter count matches your expectations
3. **Save Output**: Copy results immediately after extraction
4. **Multiple Uses**: Keep the tool bookmarked for repeated use

## 🎨 Browser Support

- ✅ Chrome (Recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers

---

**Made for Google Web Designer developers** 🚀
