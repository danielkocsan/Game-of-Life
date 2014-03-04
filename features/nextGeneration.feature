@Pending
Feature: Any live cell with two or three live neighbours lives on to the next generation

Scenario: Live cell with three neighbours will survive

    Given There a board with the following setup [[1,1],[0,1],[2,1],[1,0]]
    When Game rolls
    Then Cell is live on {1,1}