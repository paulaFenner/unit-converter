# What you've done well

- the app works very well, and you made it naturally responsive
- using very important meta tags like doctype, lang="en", title, viewport
- semantic HTML <main> <section>, logical order of headings
- everything is nicely indented
- useful comments in index.js
- extracting value from an input
- use of .toFixed(3)
- use of template strings `${}`
- use of classes is consistent. Know how to use type selectors like button or h3

# What could be improved

## JS

- [ ] let v. const
- [ ] refactoring for improved readability - concepts used:

- separation of concerns
- parameters and arguments
- locally-scoped variables

## design:

- [ ] adding a bit of padding on main to give it more breathing room
- [ ] adding a min-height to .conversion-container to avoid the layout shift when renderinig results

## HTML

- [ ] be aware that strings like "Metric/Imperial" with no space are treated as ONE word and will nt break when there's no more space on the line
- [ ] `<input
                type="text"
                id="input-el"
                placeholder="0" />`
      Are you aware of ther types of inputs? Here, we could use type="number"
      For your curiosity: https://www.w3schools.com/html/html_form_input_types.asp
