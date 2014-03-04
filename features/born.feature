@Pending
Feature: Any dead cell with exactly three live neighbours becomes a live cell

Scenario: Dead cell with three neighbours will born

    Given There a board with the following setup [[0,1],[2,1],[1,0]]
    When Game rolls
    Then Cell is live on {1,1}