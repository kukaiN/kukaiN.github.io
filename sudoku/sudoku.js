

function sudoku_solver() {
    if (checker()){
        exact_cover_method();
    }
}

function get_board() {

    var board = document.getElementById("sudoku_board");
    var curr_size = get_size();
    let board_to_return = Array(curr_size).fill.map(() => Array(current_size).fill(0));
    for (var i = 0; i<curr_size; ++i){
        var curr_row = board.rows[i];
        for (var j = 0; j < curr_size; ++j){
            var curr_cell = curr_row.cells[j];
            var stored_str = curr_cell.getElementsByClassName("sudoku_cell")[0].value;
            if (!isNaN(stored_str)){
                var stored_num = parseInt(stored_str);
                board_to_return = 0 // resume here
            }
            else {
                var a = 0;
                //pass
            }
}}}


function exact_cover_method() {
    // copy paste of my sudoku solver written in python
    root_n = get_size();
    n = root_n*root_n;
    console.log(root_n, n);
    board = 1;
    /*
        def make_board_from(board_val, n):
        """ returns a 2d array of size n x n filled based on the (i, j, num) in the list 'board_val'"""
        temp = [[0 for _ in range(n) ] for _ in range(n)]
        for (i, j, num) in board_val: temp[j][i] = num
        return temp

        def Knuth_exact_cover_solver(root_n, n, board):
            p_dict = dict(((a, b) , {c+1 for c in range(n)}) for a in range(n) for b in range(n))
            r_dict = dict(((a, b+1) , {c for c in range(n)}) for a in range(n) for b in range(n))
            c_dict = dict(((a, b+1) , {c for c in range(n)}) for a in range(n) for b in range(n))
            b_dict = dict(((a, b+1) , {((a%root_n)*root_n+c%root_n , (a//root_n)*root_n+c//root_n)
                                for c in range(n)}) for a in range(n) for b in range(n))
            cover_dict = dict( ((i, j, k), ((i, j), (i, k), (j, k), (int(j/root_n)*root_n + i//root_n, k)))
                                for (i, j, k) in itertools.product(range(n), range(n), range(1,n+1)))
            solution = [(x, y, item) for y, rows in enumerate(board) for x, item in enumerate(rows) if item]
            for partial_sol in solution: remove_from_dict(p_dict, r_dict, c_dict, b_dict, cover_dict, n, partial_sol)
            return [make_board_from(sol, n) for sol in backtracking_solver(p_dict, r_dict, c_dict, b_dict, cover_dict, root_n, n, solution)]

        def remove_from_dict(p_dict, r_dict, c_dict, b_dict, cover_dict, n, num_cell):
            """ remove values associate to the given (i, j, num) from the 4 dictionaries"""
            dict_list, removed_values = [p_dict, r_dict, c_dict, b_dict], [[] for _ in range(4)]
            # pop the set that's associated to the (i, j, num) and store it for when we need to put it back
            removed_set = [(key, dict_ref.pop(key, None)) for key, dict_ref in zip(cover_dict[num_cell], dict_list)] # popping and assigning values
            (i, j, num) = num_cell
            iter_list = [(tmp, j, num) for tmp in range(n)]+[(i, tmp, num) for tmp in range(n)]+[(i, j, tmp+1) for tmp in range(n)]
            # remove other related values in the dictionaries if they exist
            for (i, j, num) in iter_list:
                p_val, r_val, c_val, b_val = cover_dict[(i, j, num)] # get the new keys that are associated to the new (i, j, num)
                for index, (key_val, remove_val, base_dict) in enumerate(zip([p_val, r_val, c_val, b_val], [num, j, i, (i, j)], dict_list)):
                    if base_dict.get(key_val, False) and remove_val in base_dict[key_val]: # if the key works and the value to remove is in the set
                        base_dict[key_val].discard(remove_val) # modify dictionary
                        removed_values[index].append((key_val, remove_val)) # store what was removed
            return (removed_set, removed_values) # return the values that we removed

        def insert_into_dict(p_dict, r_dict, c_dict, b_dict, cover_dict, root_n, n, removed_set, removed_value):
            """ function that puts back the removed values into the set that is associated to it's original position"""
            (p_val, pop_p), (r_val, pop_r), (c_val, pop_c), (b_val, pop_b) = removed_set
            p_removed_val, r_removed_val, c_removed_val, b_removed_val = removed_value
            # put back the popped value if the popped value is defined
            if pop_p != None: p_dict[p_val] = pop_p
            if pop_r != None: r_dict[r_val] = pop_r
            if pop_c != None: c_dict[c_val] = pop_c
            if pop_b != None: b_dict[b_val] = pop_b
            # put back each entries that were removed into their respective dictionaries
            for ((i, j), num) in p_removed_val: p_dict[(i, j)].add(num)
            for ((i, num), j) in r_removed_val: r_dict[(i, num)].add(j)
            for ((j, num), i) in c_removed_val: c_dict[(j, num)].add(i)
            for ((b_num, num), (i, j)) in b_removed_val: b_dict[(b_num, num)].add((i, j))

        def backtracking_solver(p_dict, r_dict, c_dict, b_dict, cover_dict, root_n, n, solution):
            """ a backtracking function that solves a sudoku board using the exact cover method"""
            if len(solution) == n**2:
                #print("solution", p_dict, r_dict, c_dict, b_dict) # uncomment it, and you'll see that when a solution is found, all the dictionary are empty
                yield solution
            else:
                # finding the next cell to fill based on the minimum number of candidates, I.e. choose the cell that migitates branching
                p_key, r_key = min(p_dict, key=lambda p: len(p_dict[p])), min(r_dict, key=lambda r: len(r_dict[r]))
                c_key, b_key = min(c_dict, key=lambda c: len(c_dict[c])), min(b_dict, key=lambda b: len(b_dict[b]))
                index, length = min([(0, len(p_dict[p_key])), (1, len(r_dict[r_key])), (2 ,len(c_dict[c_key])), (3, len(b_dict[b_key]))], key= lambda a: a[1])
                min_list = [[(p_key[0], p_key[1], number) for number in p_dict[p_key]], [(r_key[0], y_coor, r_key[1]) for y_coor in r_dict[r_key]],
                            [(x_coor, c_key[0], c_key[1]) for x_coor in c_dict[c_key]], [(xy_coor[0], xy_coor[1], b_key[1]) for xy_coor in b_dict[b_key]]]
                #if len(min_list[index]) > 1: print("branching at coordinate {0} with {1} options, choosing between {2}".format((min_list[index][0][:2]), length, [nm for (i,j,nm) in min_list[index]]))
                for cell_val in min_list[index]: # there's only few times when the branching occurs
                    #print("inserted", cell_val[2], "into", (cell_val[0],cell_val[1]))
                    solution.append(cell_val)
                    removed_sets, removed_value = remove_from_dict(p_dict, r_dict, c_dict, b_dict, cover_dict, n, cell_val)
                    for sol in backtracking_solver(p_dict, r_dict, c_dict, b_dict, cover_dict, root_n, n, solution):
                        yield sol
                    insert_into_dict(p_dict, r_dict, c_dict, b_dict, cover_dict, root_n, n, removed_sets, removed_value)
                    #print("removed", cell_val[2], "from", (cell_val[0],cell_val[1]))
                    del solution[-1]

        def main():
            #this board is from Knuth's book, and it has a unique solution
            board = [[0, 0, 3, 0, 1, 0, 0, 0, 0],
                    [4, 1, 5, 0, 0, 0, 0, 9, 0],
                    [2, 0, 6, 5, 0, 0, 3, 0, 0],
                    [5, 0, 0, 0, 8, 0, 0, 0, 9],
                    [0, 7, 0, 9, 0, 0, 0, 3, 2],
                    [0, 3, 8, 0, 0, 4, 0, 6, 0],
                    [0, 0, 0, 2, 6, 0, 4, 0, 3],
                    [0, 0, 0, 3, 0, 0, 0, 0, 8],
                    [3, 2, 0, 0, 0, 7, 9, 5, 0]]
            # removed some values from the board above, this one have 5 solutions, run the program to see them

            root_n, n = 3, 9
            for sol in Knuth_exact_cover_solver(root_n, n, board):
                print_board(sol)

        if __name__ == "__main__":
            main()
        */
    }
$(document).ready(function () {

        $('#sidebarCollapse').on('click', function () {
            $('#sidebar').toggleClass('active');
        });

    });

function checker(){
    var board = document.getElementById("sudoku_board");
    var curr_size = get_size();
    for (var i = 0; i<curr_size; ++i){
        var curr_row = board.rows[i];
        for (var j = 0; j < curr_size; ++j){
            var curr_cell = curr_row.cells[j];
            var stored_str = curr_cell.getElementsByClassName("sudoku_cell")[0].value;
            console.log(stored_str);
            if (!isNaN(stored_str)){
                var stored_num = parseInt(stored_str);
                if (stored_num > 0 && stored_num < get_size()+1) {curr_cell.style.background = document.body.style.background;}
                else {
                    curr_cell.style.backgroundColor = "rgba(255, 0, 0, 0.4)";
                    }
                }
}}}

function get_size(){
    return document.getElementById("sudoku_board").rows.length;
}


// table functions
function delete_row(table_object, curr_size, new_size){
    for (var i = new_size; i < curr_size; ++i){
        table_object.deleteRow(-1);
    }
}
function delete_cells(table_object, curr_size, new_size){
    // delete few extra cells in the current board
    for (var i = 0; i < new_size; ++i) {
        var curr_row = table_object.rows[i];
          for (var j = new_size; j<curr_size; ++j){
              curr_row.deleteCell(-1);
}}}

function add_row(table_object, curr_size, new_size){
    for (var i = curr_size; i < new_size; ++i){
        var curr_row = table_object.insertRow(-1);
        for (var j = 0; j<new_size; ++j){
            var new_cell = curr_row.insertCell(-1);
            new_cell.appendChild(make_input());
}}}

function make_input(){
    var newinput = document.createElement("input");
    newinput.type = "text";
    //newinput.value = "" + Math.floor(Math.random()*get_size());
    newinput.className = "sudoku_cell";
    return newinput;
}
function add_cells(table_object, curr_size, new_size) {
    for (var i = 0; i < curr_size; ++i){ // modify the current rows and extend them
        var curr_row = table_object.rows[i];
        for (var j = curr_size; j < new_size; ++j){
            var new_cell = curr_row.insertCell(-1);
            new_cell.appendChild(make_input());
}}}
function change_size(){// modify the board size on screen
    var sudoku_board = document.getElementById("sudoku_board");
    var new_size = document.getElementById("board_size").value**2;
    var current_size = get_size();
    if (new_size > current_size) {
        add_cells(sudoku_board, current_size, new_size);
        add_row(sudoku_board, current_size, new_size);
    }
    else if (current_size > new_size) {
        delete_cells(sudoku_board, current_size, new_size);
        delete_row(sudoku_board, current_size, new_size);
    }
    else{
        // pass, cause no need to modify board
    }
}

