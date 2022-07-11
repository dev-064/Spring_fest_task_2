let dice_result;
let active_cell_A_1 = -1;
let active_cell_A_2 = -1;
let active_cell_B_1 = -1;
let active_cell_B_2 = -1;
let turn = true;
let token_A_locker = 2;
let token_B_locker = 2;
let qualified_tokens_A = 0;
let qualified_tokens_B = 0;
let cell_width = document.querySelector("#topbar>div").getBoundingClientRect();
function die_animation() {
  let temp = Math.random() * 6 + 1;
  temp = Math.floor(temp);
  document.getElementById("dice").classList.add("revolve_animation");
  setTimeout(remove_animation, 1000);
  document.getElementById("dice").innerHTML = temp;
  dice_result = temp;
}
function remove_animation() {
  document.getElementById("dice").classList.remove("revolve_animation");
}
//fixing width of vertical bars
window.onload = function () {
  for (let i = 0; i < 6; i++) {
    document.querySelectorAll("#rightbar>.box")[i].style.width =
      cell_width.width + "px";
    document.querySelectorAll("#leftbar>.box")[i].style.width =
      cell_width.width + "px";
  }
};

function eject_action_A() {
  if (turn && token_A_locker === 2 && dice_result === 6) {
    document.querySelector(".tokens_A").style.display = "none";
    token_A_locker--;
    document.querySelectorAll(".start>div")[0].style.display = "flex";
    document.querySelectorAll(".start>div")[0].style.backgroundColor = "blue";
    if (active_cell_A_1 === -1) {
      active_cell_A_1 = 0;
    } else if (active_cell_A_2 === -1) {
      active_cell_A_2 = 0;
    }
    if (active_cell_A_2 === active_cell_A_1 && active_cell_A_1 != 27) {
      document.querySelectorAll(".start>div")[1].style.display = "flex";
      document.querySelectorAll(".start>div")[1].style.backgroundColor = "blue";
    }
  } else if (turn && token_A_locker === 1 && dice_result === 6) {
    document.querySelectorAll(".tokens_A")[0].style.display = "none";
    document.querySelectorAll(".tokens_A")[1].style.display = "none";
    token_A_locker--;
    document.querySelector(".eject-btn-A").style.display = "none";
    document.querySelectorAll(".start>div")[0].style.display = "flex";
    document.querySelectorAll(".start>div")[0].style.backgroundColor = "blue";
    if (active_cell_A_1 === -1) {
      active_cell_A_1 = 0;
    } else if (active_cell_A_2 === -1) {
      active_cell_A_2 = 0;
    }
    if (active_cell_A_2 === active_cell_A_1 && active_cell_A_1 != 27) {
      document.querySelectorAll(".start>div")[1].style.display = "flex";
      document.querySelectorAll(".start>div")[1].style.backgroundColor = "blue";
    }
  }
}
function eject_action_B() {
  if (!turn && token_B_locker === 2 && dice_result === 6) {
    document.querySelector(".tokens_B").style.display = "none";
    token_B_locker--;
    document.querySelectorAll(".start-red>div")[0].style.display = "flex";
    document.querySelectorAll(".start-red>div")[0].style.backgroundColor =
      "brown";
    if (active_cell_B_1 === -1) {
      active_cell_B_1 = 14;
    } else if (active_cell_B_2 === -1) {
      active_cell_B_2 = 14;
    }
    if (active_cell_B_2 === active_cell_B_1) {
      document.querySelectorAll(".start-red>div")[1].style.display = "flex";
      document.querySelectorAll(".start-red>div")[1].style.backgroundColor =
        "brown";
    }
  } else if (!turn && token_B_locker === 1 && dice_result === 6) {
    document.querySelectorAll(".tokens_B")[0].style.display = "none";
    document.querySelectorAll(".tokens_B")[1].style.display = "none";
    token_B_locker--;
    document.querySelector(".eject-btn-B").style.display = "none";
    document.querySelectorAll(".start-red>div")[0].style.display = "flex";
    document.querySelectorAll(".start-red>div")[0].style.backgroundColor =
      "brown";
    if (active_cell_B_1 === -1) {
      active_cell_B_1 = 14;
    } else if (active_cell_B_2 === -1) {
      active_cell_B_2 = 14;
    }
    if (active_cell_B_2 === active_cell_B_1) {
      document.querySelectorAll(".start-red>div")[1].style.display = "flex";
      document.querySelectorAll(".start-red>div")[1].style.backgroundColor =
        "brown";
    }
  }
}

//moving the tokens

function move_A_1() {
  // alert("move A 1");
  if (active_cell_A_1 === active_cell_A_2) {
    document.querySelectorAll(`#cell-${active_cell_A_1}>div`)[0].style.display =
      "none"
      document
        .querySelectorAll(`#cell-${active_cell_A_2}>div`)[0]
        .removeEventListener("click", move_A_1);
    document.querySelectorAll(
      `#cell-${(active_cell_A_1 + dice_result) % 28}>div`
    )[0].style.display = "flex";
    document.querySelectorAll(
      `#cell-${(active_cell_A_1 + dice_result) % 28}>div`
    )[0].style.backgroundColor = "blue";
  } else {
    document.querySelectorAll(`#cell-${active_cell_A_1}>div`)[0].style.display =
      "none";
    document.querySelectorAll(`#cell-${active_cell_A_1}>div`)[1].style.display =
      "none";
    if (active_cell_A_2 === (active_cell_A_1 + dice_result) % 28) {
      document.querySelectorAll(
        `#cell-${(active_cell_A_1 + dice_result) % 28}>div`
      )[0].style.display = "flex";
      document.querySelectorAll(
        `#cell-${(active_cell_A_1 + dice_result) % 28}>div`
      )[0].style.backgroundColor = "blue";
      document.querySelectorAll(
        `#cell-${(active_cell_A_1 + dice_result) % 28}>div`
      )[1].style.display = "flex";
      document.querySelectorAll(
        `#cell-${(active_cell_A_1 + dice_result) % 28}>div`
      )[1].style.backgroundColor = "blue";
    } else {
      document.querySelectorAll(
        `#cell-${(active_cell_A_1 + dice_result) % 28}>div`
      )[0].style.display = "flex";
      document.querySelectorAll(
        `#cell-${(active_cell_A_1 + dice_result) % 28}>div`
      )[0].style.backgroundColor = "blue";
    }
    document
      .querySelectorAll(`#cell-${active_cell_A_1}>div`)[0]
      .removeEventListener("click", move_A_1);
  }
  active_cell_A_1 = (active_cell_A_1 + dice_result) % 28;
  if (
    active_cell_B_1 === active_cell_A_1 &&
    active_cell_A_1 != 0 &&
    active_cell_A_1 != 14 &&
    active_cell_A_1 != 27 &&
    active_cell_A_1 != 13
  ) {
    cancel_tokens("blue", active_cell_B_1);
  } else if (
    active_cell_B_2 === active_cell_A_1 &&
    active_cell_A_1 != 0 &&
    active_cell_A_1 != 14 &&
    active_cell_A_1 != 27 &&
    active_cell_A_1 != 13
  ) {
    cancel_tokens("blue", active_cell_B_2);
  }
  if (active_cell_A_1 === 27) {
    document.querySelector(`#cell-${active_cell_A_1}>div`).style.display =
      "none";
    qualified_tokens_A++;
  }
}
function move_A_2() {
  // alert("move A 2");
  if (active_cell_A_1 === active_cell_A_2) {
    document.querySelectorAll(`#cell-${active_cell_A_1}>div`)[1].style.display =
      "none";
    document
      .querySelectorAll(`#cell-${active_cell_A_2}>div`)[1]
      .removeEventListener("click", move_A_2);
    document.querySelectorAll(
      `#cell-${(active_cell_A_1 + dice_result) % 28}>div`
    )[1].style.display = "flex";
    document.querySelectorAll(
      `#cell-${(active_cell_A_1 + dice_result) % 28}>div`
    )[1].style.backgroundColor = "blue";
  } else {
    alert("hey");
    document.querySelectorAll(`#cell-${active_cell_A_2}>div`)[0].style.display =
      "none";
    document.querySelectorAll(`#cell-${active_cell_A_2}>div`)[1].style.display =
      "none";
    if (active_cell_A_1 === (active_cell_A_2 + dice_result) % 28) {
      document.querySelectorAll(
        `#cell-${(active_cell_A_2 + dice_result) % 28}>div`
      )[0].style.display = "flex";
      document.querySelectorAll(
        `#cell-${(active_cell_A_2 + dice_result) % 28}>div`
      )[0].style.backgroundColor = "blue";
      document.querySelectorAll(
        `#cell-${(active_cell_A_2 + dice_result) % 28}>div`
      )[1].style.display = "flex";
      document.querySelectorAll(
        `#cell-${(active_cell_A_2 + dice_result) % 28}>div`
      )[1].style.backgroundColor = "blue";
    } else {
      document.querySelectorAll(
        `#cell-${(active_cell_A_2 + dice_result) % 28}>div`
      )[0].style.display = "flex";
      document.querySelectorAll(
        `#cell-${(active_cell_A_2 + dice_result) % 28}>div`
      )[0].style.backgroundColor = "blue";
    }
    document
      .querySelectorAll(`#cell-${active_cell_A_2}>div`)[1]
      .removeEventListener("click", move_A_2);
  }
  active_cell_A_2 = (active_cell_A_2 + dice_result) % 28;
  if (
    active_cell_B_1 === active_cell_A_2 &&
    active_cell_A_2 != 0 &&
    active_cell_A_2 != 14 &&
    active_cell_A_2 != 27 &&
    active_cell_A_2 != 13
  ) {
    cancel_tokens("blue", active_cell_B_1);
  } else if (
    active_cell_B_2 === active_cell_A_2 &&
    active_cell_A_2 != 0 &&
    active_cell_A_2 != 14 &&
    active_cell_A_2 != 27 &&
    active_cell_A_2 != 13
  ) {
    cancel_tokens("blue", active_cell_B_2);
  }
  if (active_cell_A_2 === 27) {
    document.querySelector(`#cell-${active_cell_A_2}>div`).style.display =
      "none";
    qualified_tokens_A++;
  }
}
function move_B_1() {
  if (active_cell_B_1 === active_cell_B_2) {
    document.querySelectorAll(`#cell-${active_cell_B_1}>div`)[0].style.display =
      "none";
    document
      .querySelectorAll(`#cell-${active_cell_B_2}>div`)[0]
      .removeEventListener("click", move_B_1);
    document.querySelectorAll(
      `#cell-${(active_cell_B_1 + dice_result) % 28}>div`
    )[0].style.display = "flex";
    document.querySelectorAll(
      `#cell-${(active_cell_B_1 + dice_result) % 28}>div`
    )[0].style.backgroundColor = "red";
  } else {
    document.querySelectorAll(`#cell-${active_cell_B_1}>div`)[0].style.display =
      "none";
    document.querySelectorAll(`#cell-${active_cell_B_1}>div`)[0].style.display =
      "none";
    if (active_cell_B_2 === (active_cell_B_1 + dice_result) % 28) {
      document.querySelectorAll(
        `#cell-${(active_cell_B_1 + dice_result) % 28}>div`
      )[0].style.display = "flex";
      document.querySelectorAll(
        `#cell-${(active_cell_B_1 + dice_result) % 28}>div`
      )[0].style.backgroundColor = "red";
      document.querySelectorAll(
        `#cell-${(active_cell_B_1 + dice_result) % 28}>div`
      )[1].style.display = "flex";
      document.querySelectorAll(
        `#cell-${(active_cell_B_1 + dice_result) % 28}>div`
      )[1].style.backgroundColor = "red";
    } else {
      document.querySelectorAll(
        `#cell-${(active_cell_B_1 + dice_result) % 28}>div`
      )[0].style.display = "flex";
      document.querySelectorAll(
        `#cell-${(active_cell_B_1 + dice_result) % 28}>div`
      )[0].style.backgroundColor = "red";
    }
    document
      .querySelectorAll(`#cell-${active_cell_B_1}>div`)[0]
      .removeEventListener("click", move_B_1);
  }
  active_cell_B_1 = (active_cell_B_1 + dice_result) % 28;
  if (
    active_cell_B_1 === active_cell_A_1 &&
    active_cell_A_1 != 0 &&
    active_cell_A_1 != 14 &&
    active_cell_A_1 != 27 &&
    active_cell_A_1 != 13
  ) {
    cancel_tokens("red", active_cell_B_1);
  } else if (
    active_cell_B_1 === active_cell_A_2 &&
    active_cell_A_2 != 0 &&
    active_cell_A_2 != 14 &&
    active_cell_A_2 != 27 &&
    active_cell_A_2 != 13
  ) {
    cancel_tokens("red", active_cell_B_1);
  }
  if (active_cell_B_1 === 13) {
    document.querySelector(`#cell-${active_cell_B_1}>div`).style.display =
      "none";
    qualified_tokens_B++;
  }
}
function move_B_2() {
  if (active_cell_B_1 === active_cell_B_2) {
    document.querySelectorAll(`#cell-${active_cell_B_1}>div`)[1].style.display =
      "none";
    document
      .querySelectorAll(`#cell-${active_cell_B_2}>div`)[1]
      .removeEventListener("click", move_B_2);
    document.querySelectorAll(
      `#cell-${(active_cell_B_1 + dice_result) % 28}>div`
    )[1].style.display = "flex";
    document.querySelectorAll(
      `#cell-${(active_cell_B_1 + dice_result) % 28}>div`
    )[1].style.backgroundColor = "red";
  } else {
    document.querySelectorAll(`#cell-${active_cell_B_2}>div`)[0].style.display =
      "none";
    document.querySelectorAll(`#cell-${active_cell_B_2}>div`)[1].style.display =
      "none";
    if (active_cell_B_1 === (active_cell_B_2 + dice_result) % 28) {
      document.querySelectorAll(
        `#cell-${(active_cell_B_2 + dice_result) % 28}>div`
      )[0].style.display = "flex";
      document.querySelectorAll(
        `#cell-${(active_cell_B_2 + dice_result) % 28}>div`
      )[0].style.backgroundColor = "red";
      document.querySelectorAll(
        `#cell-${(active_cell_B_2 + dice_result) % 28}>div`
      )[1].style.display = "flex";
      document.querySelectorAll(
        `#cell-${(active_cell_B_2 + dice_result) % 28}>div`
      )[1].style.backgroundColor = "red";
    } else {
      document.querySelectorAll(
        `#cell-${(active_cell_B_2 + dice_result) % 28}>div`
      )[0].style.display = "flex";
      document.querySelectorAll(
        `#cell-${(active_cell_B_2 + dice_result) % 28}>div`
      )[0].style.backgroundColor = "red";
    }
    document
      .querySelectorAll(`#cell-${active_cell_B_2}>div`)[1]
      .removeEventListener("click", move_B_2);
  }
  active_cell_B_2 = (active_cell_B_2 + dice_result) % 28;
  if (
    active_cell_B_2 === active_cell_A_1 &&
    active_cell_A_1 != 0 &&
    active_cell_A_1 != 14 &&
    active_cell_A_1 != 27 &&
    active_cell_A_1 != 13
  ) {
    cancel_tokens("red", active_cell_B_2);
  } else if (
    active_cell_B_2 === active_cell_A_2 &&
    active_cell_A_2 != 0 &&
    active_cell_A_2 != 14 &&
    active_cell_A_2 != 27 &&
    active_cell_A_2 != 13
  ) {
    cancel_tokens("red", active_cell_B_2);
  }
  if (active_cell_B_1 === 13) {
    document.querySelector(`#cell-${active_cell_B_1}>div`).style.display =
      "none";
    qualified_tokens_B++;
  }
}

//cancel each other's tokens

function cancel_tokens(color, cell) {
  if (color === "blue") {
    document.querySelector(`#cell-${cell}`).style.display = "flex";
    document.querySelector(`#cell-${cell}>div`).style.backgroundColor = "blue";
    token_B_locker++;
    document.querySelector(".tokens_B").style.display = "flex";
    document.querySelector(".eject-btn-B").style.display = "block";
  } else {
    document.querySelector(`#cell-${cell}`).style.display = "flex";
    document.querySelector(`#cell-${cell}>div`).style.backgroundColor = "red";
    token_A_locker++;
    document.querySelector(".tokens_A").style.display = "flex";
    document.querySelector(".eject-btn-A").style.display = "block";
  }
}

// actions that is to be taken on rolling the dice

const roll_action = () => {
  if (turn) {
    document
      .querySelector(".eject-btn-A")
      .addEventListener("click", eject_action_A);
    if (active_cell_A_1 > -1 && active_cell_A_1 + dice_result < 28) {
      document
        .querySelectorAll(`#cell-${active_cell_A_1}>div`)[0]
        .addEventListener("click", move_A_1);
    }
    if (active_cell_A_2 > -1 && active_cell_A_2 + dice_result < 28) {
      document;
      if (active_cell_A_1 === active_cell_A_2) {
        document
          .querySelectorAll(`#cell-${active_cell_A_2}>div`)[1]
          .addEventListener("click", move_A_2);
      } else {
        document
          .querySelectorAll(`#cell-${active_cell_A_2}>div`)[0]
          .addEventListener("click", move_A_2);
      }
    }
  } else {
    document
      .querySelector(".eject-btn-B")
      .addEventListener("click", eject_action_B);
    if (active_cell_B_1 > -1) {
      if (active_cell_B_1 > 7 && active_cell_B_1 < 14) {
        if (active_cell_B_1 + dice_result <= 14) {
          document
            .querySelectorAll(`#cell-${active_cell_B_1}>div`)[0]
            .addEventListener("click", move_B_1);
        }
      } else {
        document
          .querySelectorAll(`#cell-${active_cell_B_1}>div`)[0]
          .addEventListener("click", move_B_1);
      }
    }
    if (active_cell_B_2 > -1) {
      if (active_cell_B_2 > 7 && active_cell_B_2 < 13) {
        if (active_cell_B_2 + dice_result <= 13) {
          if (active_cell_B_1 === active_cell_B_2) {
            document
              .querySelectorAll(`#cell-${active_cell_B_2}>div`)[1]
              .addEventListener("click", move_B_2);
          } else {
            document
              .querySelectorAll(`#cell-${active_cell_B_2}>div`)[0]
              .addEventListener("click", move_B_2);
          }
        }
      } else {
        if (active_cell_B_1 === active_cell_B_2) {
          document
            .querySelectorAll(`#cell-${active_cell_B_2}>div`)[1]
            .addEventListener("click", move_B_2);
        } else {
          document
            .querySelectorAll(`#cell-${active_cell_B_2}>div`)[0]
            .addEventListener("click", move_B_2);
        }
      }
    }
  }
  if (dice_result !== 6) {
    turn = !turn;
    setTimeout(() => {
      if (turn) {
        document.querySelector(
          ".player-got"
        ).innerHTML = `Player B : ${dice_result}`;
        document.querySelector(".player-name").innerHTML = "Player A Turn";
      } else {
        document.querySelector(
          ".player-got"
        ).innerHTML = `Player A : ${dice_result}`;
        document.querySelector(".player-name").innerHTML = "Player B Turn";
      }
    }, 1000);
  } else {
    setTimeout(() => {
      if (turn) {
        document.querySelector(
          ".player-got"
        ).innerHTML = `Player A : ${dice_result}`;
      } else {
        document.querySelector(
          ".player-got"
        ).innerHTML = `Player B : ${dice_result}`;
      }
    }, 100);
  }
};
