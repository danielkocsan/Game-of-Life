Feature: Any live cell with more than three live neighbours dies, as if by overcrowding

Scenario: Live cell with four neightbours will die

    Given There a board with the following setup [[1,1],[0,1],[2,1],[1,0],[1,2]]
    When Game rolls
    Then Cell is dead on {1,1}
