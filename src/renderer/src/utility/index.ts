export const initialContent = `
<h1>Exploring Tailwind CSS: A Utility-First CSS Framework</h1>

 

<p>
  When it comes to modern web development, having a powerful and efficient
  CSS framework is crucial to streamline the process of building
  responsive and attractive user interfaces. Tailwind CSS is one such
  framework that has gained immense popularity in recent years. In this
  blog post, we will dive into what makes Tailwind CSS unique and explore
  some code examples to see it in action.
</p>

<h2>What is Tailwind CSS?</h2>

<p>
  Tailwind CSS is a utility-first CSS framework, which means it provides a
  set of utility classes that you can directly apply to your HTML elements
  to style them. Instead of relying on pre-defined components, you compose
  styles by combining various utility classes. This approach offers more
  flexibility and allows you to create highly customized designs without
  writing custom CSS.
</p>

<h2>Getting Started</h2>

<p>
  To use Tailwind CSS, you need to include it in your project. You can do
  this by either installing it via npm or including it from a CDN in your
  HTML file. Let's see how you can include it using the CDN method:
</p>

<pre><code className="language-html">  &lt;!DOCTYPE html&gt; &lt;html&gt; &lt;head&gt; &lt;title&gt;My Tailwind CSS Project&lt;/title&gt; &lt;link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.15/dist/tailwind.min.css" ="stylesheet"&gt; &lt;/head&gt; &lt;body&gt; &lt;!-- Your HTML content here --&gt; &lt;/body&gt; &lt;/html&gt </code></pre>

<p>
  Once you've included Tailwind CSS in your project, you can start using
  its utility classes right away.
</p>

<h2>Exploring Utility Classes</h2>

<h3>Example 1: Styling a Button</h3>

<p>
  Tailwind CSS provides a wide range of utility classes for styling
  elements. Let's create a primary button using Tailwind CSS classes:
</p>

<pre>
  <code className="language-html">
    &lt;button class="bg-blue-500 hover:bg-blue-700 text-white font-bold
    py-2 px-4 rounded"&gt; Click Me &lt;/button&gt;
  </code>
</pre>

<p>
  In the above example, we're using utility classes like{" "}
  <code  className="language-html">bg-blue-500</code> to set the background color to a shade of blue,{" "} <code className="language-html">hover:bg-blue-700</code> to change the background color on hover,{" "}
  <code className="language-html">text-white</code> for white text color, <code className="language-html">font-bold</code> for
  bold text, <code className="language-html">py-2</code> for vertical padding, <code>px-4</code> for
  horizontal padding, and <code className="language-html">rounded</code> for rounded corners.
</p>

<h3>Example 2: Creating a Card Component</h3>

<p>
  Tailwind CSS also makes it easy to create reusable components. Let's
  build a simple card component:
</p>

<pre>
  <code className="language-html">
    &lt;div class="max-w-sm rounded overflow-hidden shadow-lg"&gt; &lt;img
    class="w-full" src="image.jpg" alt="Image"&gt; &lt;div class="px-6
    py-4"&gt; &lt;div class="font-bold text-xl mb-2"&gt;Card
    Title&lt;/div&gt; &lt;p class="text-gray-700 text-base"&gt; Lorem
    ipsum dolor sit amet, consectetur adipiscing elit. &lt;/p&gt;
    &lt;/div&gt; &lt;/div&gt;
  </code>
</pre>

<p>
  In this example, we use various utility classes like{" "}
  <code className="language-html">max-w-sm</code> to set the maximum width, <code className="language-html">rounded</code> for
  rounded corners, <code>overflow-hidden</code> to hide any overflowing
  content, and <code className="language-html">shadow-lg</code> to add a subtle shadow effect to the
  card.
</p>

<h2>Customizing Tailwind CSS</h2>

<p>
  One of the most significant advantages of Tailwind CSS is its
  customizability. You can modify its default configuration to suit your
  project's requirements. By tailoring the color palette, spacing, and
  more, you can maintain a consistent design language across your
  application.
</p>

<p>
  To customize Tailwind CSS, you need to create a configuration file. You
  can generate the default configuration file using the following command:
</p>

<pre>
  <code>npx tailwindcss init</code>
</pre>

<p>
  After generating the file, you can modify various properties to
  customize the framework according to your preferences.
</p>

<h2>Conclusion</h2>

<p>
  Tailwind CSS offers a unique approach to styling web applications. Its
  utility-first nature empowers developers to create responsive and
  visually appealing designs with ease. By leveraging its extensive set of
  utility classes and customizability, you can build consistent and
  beautiful user interfaces for your projects.
</p>

<p>
  So why not give Tailwind CSS a try on your next web development venture?
  It might just become your go-to CSS framework!
</p>

<p>
  <em>
    Note: The code examples provided in this blog post are for
    illustrative purposes only and might need adjustments based on your
    specific use case.
  </em>
</p>
`;
