# simon-game
A simon-game, a project in the Complete Web Dev Course
# What did I learn?
**I/ What is JQuery?**

#

1. What is jQuery?

It is JS library. That is, it includes a bunch of codes other people wrote.

It helps shorten our codes and avoid repetition.

1. **Syntax:**

- **$(&quot;h1&quot;).css(&quot;color&quot;,&quot;read&quot;);**
- **Safeguarding Method: $(document).ready(function(){ code; })**

Only once our document is ready then it&#39;s going to call this code.

- **Selecting Elements:**

**$(&quot;cssSelector&quot;)**

- JQuery only return an array; that is, it selects many, NOT one.

- **Manipulating Elements:**
  - **Manipulating Styles:**
**.css(&quot;cssProperty&quot;):** get CSS property
**.css(&quot;cssProperty&quot;,&quot;Changes&quot;):** set css property
**.addClass(&quot;CssClass1 CssClass2&quot;)**
**.removeClass(&quot;CssClass1 CssClass2&quot;)**
**.hasClass(&quot;cssClass&quot;):** return a Boolean to indicate whether it has the class
  - **Manipulating Texts:**
**.text(&quot;newText&quot;)**: update the text of the HTML element to new text.
**.html(&quot;newHTMLCode&quot;)**: update the HTML code inside of the HTML element.
- **Manipulating HTML Attributes** such as src, href
**$(&quot;img&quot;).attr(&quot;HTMLAttribute&quot;):** getting value of the attribute
**$(&quot;img&quot;).attr(&quot;HTMLAttribute&quot;, &quot;change&quot;):** setting value of the attribute
- **Event Listener**
  - **Add an event listener**
- $(&quot;htmlElement&quot;).click(function(){doSomething;})
$(&quot;htmlElement&quot;).keypress(function(event){doSomething;})
**$(&quot;htmlElement&quot;).on(&quot;eventName&quot;,function(e){doSomething;} )**
- **Adding new Element**
  - **$(&quot;htmlElement&quot;).before(&quot;newHTMLCode&quot;):** Creating new HTML code before the chosen HTML element
  - **$(&quot;htmlElement&quot;).after(&quot;newHTMLCode&quot;):** Creating new HTML code after the chosen HTML element
  - **$(&quot;htmlElement&quot;).prepend(&quot;newHTMLCode&quot;):** Creating new HTML code before the CONTENT of chosen HTML element
  - **$(&quot;htmlElement&quot;).append(&quot;newHTMLCode&quot;):** Creating new HTML code after the CONTENT of chosen HTML element
- **Removing Element**
  - $(&quot;elementToRemove&quot;).remove();
- **Adding animations**

**\*Sudden disappearance and appearance**

- **$(&quot;htmlElementToHide&quot;).hide();**
- **$(&quot;htmlElementToHide&quot;).show();**
- **$(&quot;htmlElementToHide&quot;).toggle();**

**\*Progressive disappearance and appearance**

- **$(&quot;htmlElementToHide&quot;).fadeOut();**
- **$(&quot;htmlElementToHide&quot;).fadeIn();**
- **$(&quot;htmlElementToHide&quot;).fadeToggle();**
- **$(&quot;htmlElementToHide&quot;).slideUp();**
- **$(&quot;htmlElementToHide&quot;).slideDown();**
- **$(&quot;htmlElementToHide&quot;).slideToggle();**

**\*Animate other CSS properties:** only use for the CSS properties with numerical value.

- **$(&quot;htmlElement&quot;).animate({opacity: 0.5});**

**II/ How to incorporate JQuery to our code?**

**You should use popular CDN,** Content Delivery Networks, such as Google CDN. This is because the user may already have the CDN cached in their browser; hence, our website would be loaded faster.

- **Getting Started:**
  - Must include jQuery CDN tag above the script tag at the **END** of the body element.
