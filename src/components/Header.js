export default function Header (){
    return (
      <div className="header">
        <h1>Sartre's List</h1>
        <h2>Better-Dressed People</h2>
        <nav class="header-nav">
          <ul>
            <li>
              <a href="/womens">Women's</a>
            </li>
            <li>
              <a href="/mens">Men's</a>
            </li>
            <li>
              <a href="/onthestreet">On The Street</a>
            </li>
            <li>
              <a href="/thecatwalk">The Catwalk</a>
            </li>
            <li>
              <a href="/adwatch">Ad Watch</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
          </ul>
        </nav>
      </div>
    );
}