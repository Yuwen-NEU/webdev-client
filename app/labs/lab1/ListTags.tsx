export default function ListTags() {
  return (
    <div id="wd-lists">
      <h4>List Tags</h4>

      <h5>Ordered List Tag</h5>
      How to make pancakes:
      <ol id="wd-pancakes">
        <li>Mix dry ingredients.</li>
        <li>Add wet ingredients.</li>
        <li>Stir to combine.</li>
        <li>Heat a skillet or griddle.</li>
        <li>Pour batter onto the skillet.</li>
        <li>Cook until bubbly on top.</li>
        <li>Flip and cook the other side.</li>
        <li>Serve and enjoy!</li>
      </ol>
      My favorite recipe:
      <ol id="wd-your-favorite-recipe">
        <li>Bring a pot of salted water to a boil and cook the pasta.</li>
        <li>Melt butter in a wide pan over medium heat.</li>
        <li>Add sliced garlic and red pepper flakes; cook until fragrant.</li>
        <li>Add the shrimp and cook two minutes per side, until pink.</li>
        <li>Toss in the drained pasta with a splash of pasta water.</li>
        <li>Finish with lemon juice, parsley, and grated Parmesan.</li>
      </ol>

      <h5>Unordered List Tag</h5>
      My favorite books (in no particular order)
      <ul id="wd-my-books">
        <li>Dune</li>
        <li>Lord of the Rings</li>
        <li>Ender&apos;s Game</li>
        <li>Red Mars</li>
        <li>The Forever War</li>
      </ul>

      Your favorite books (in no particular order)
      <ul id="wd-your-books">
        <li>Harry Potter</li>
        <li>The Great Gatsby</li>
        <li>The Vampire Diaries</li>
      </ul>

      <h5>HTML tags from this chapter</h5>
      <ul id="wd-ai-html-tags">
        <li>h1 - the largest section heading</li>
        <li>p - wraps a block of text with vertical spacing</li>
        <li>ol - an ordered list where sequence matters</li>
        <li>ul - an unordered, bulleted list</li>
        <li>table - organizes data into rows and columns</li>
        <li>img - places a remote or local picture on the page</li>
        <li>form - groups input controls for collecting data</li>
      </ul>
    </div>
  );
}
