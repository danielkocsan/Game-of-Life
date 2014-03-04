@Pending
Feature: Any live cell with fewer than two live neighbours dies, as if caused by underpopulation

Scenario: Live cell without neighbours will die

    Given There a board with the following setup [[1,1]]
    When Game rolls
    Then Cell is dead on {1,1}