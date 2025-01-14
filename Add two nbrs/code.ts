class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let l3: ListNode | null = new ListNode(0, null);
  let head: ListNode | null = l3;
  let carry = 0;
  while (l1 && l2) {
    let val = l1?.val + l2?.val + carry;
    carry = Math.floor(val / 10);
    if (val >= 10) {
      val = val % 10;
    }
    const temp = new ListNode(val, null);
    l1 = l1?.next;
    l2 = l2?.next;
    l3.next = temp;
    l3 = l3.next;
  }
  while (l1) {
    let val = l1.val + carry;
    carry = Math.floor(val / 10);
    if (val > 9) val = val % 10;
    const temp = new ListNode(val, null);
    l1 = l1.next;
    l3.next = temp;
    l3 = l3.next;
  }
  while (l2) {
    let val = l2.val + carry;
    carry = Math.floor(val / 10);
    if (val > 9) val = val % 10;
    const temp = new ListNode(val, null);
    l2 = l2.next;
    l3.next = temp;
    l3 = l3.next;
  }

  if (carry >= 1) {
    const temp = new ListNode(carry, null);
    l3.next = temp;
  }

  return head.next;
}

const test = () => {
  let l1 = new ListNode(2, null);
  let head: ListNode | null = l1;

  l1.next = new ListNode(4, null);
  l1 = l1.next;

  l1.next = new ListNode(3, null);
  l1 = l1.next;

  l1.next = new ListNode(5, null);
  l1 = l1.next;

  let l2 = new ListNode(5, null);
  let head2: ListNode | null = l2;

  l2.next = new ListNode(6, null);
  l2 = l2.next;

  l2.next = new ListNode(4, null);
  l2 = l2.next;

  let head3 = addTwoNumbers(head, head2);

  while (head3) {
    console.log(head3.val);
    head3 = head3.next;
  }
};

test();
