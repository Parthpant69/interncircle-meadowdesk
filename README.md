# Meadowdesk | Plans and pricing

InternCircle Fullstack Web Development, Project 03. Meadowdesk is a fictional project planning workspace. Its prices and features are demo content.

## Run locally

Open `index.html` in a modern browser, or serve the files with VS Code Live Server. The page uses HTML, CSS, and JavaScript with no build step or external dependencies.

Choose **Monthly** or **Yearly** to update all three cards. Each **Choose** button opens a preview of the selected plan and billing option.

## Implementation

- Prices are maintained in the HTML as `data-monthly` and `data-yearly` values. JavaScript updates the displayed numbers, billing units, button state, and an announcement for screen readers.
- The yearly total is 20% below twelve monthly payments for each plan.
- CSS Grid lays out the cards in three columns. Below 800 px, the Popular Pro plan comes first in both the layout and keyboard order.
- Transition and transform effects respect the browser’s reduced-motion preference.

## InternCircle submission

Submit a publicly accessible live page link, a publicly accessible code link, and screenshots of both billing views.
