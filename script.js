let $fileExtension;

function displayCavab() {
  $firstName = document
    .getElementById('vm3cuxco')
    .elements.namedItem('fname').value;
  $lastName = document
    .getElementById('vm3cuxco')
    .elements.namedItem('lname').value;
  $studentId = document
    .getElementById('vm3cuxco')
    .elements.namedItem('studentId').value;
  $ImtahanNovu = document
    .getElementById('vm3cuxco')
    .elements.namedItem('ImtahanNovu').value;

  if ($ImtahanNovu == 'word') {
    $fileExtension = 'doc';
  } else {
    $fileExtension = 'html';
  }
  if (!$studentId) {
    alert ("Kodu daxil edin");
    /* document.getElementById('displayLink').innerHTML = 'Kodu daxil edin'; */
  } else {
    window.open('http://www.imtahanim.az/cavablar/' +
    $ImtahanNovu +
    '/' +
    $studentId +
    '.' +
    $fileExtension +
    '')

    document.getElementById('displayLink').innerHTML =
      '<a href="http://www.imtahanim.az/cavablar/' +
      $ImtahanNovu +
      '/' +
      $studentId +
      '.' +
      $fileExtension +
      '">' +
      $studentId +
      '.' +
      $fileExtension +
      ' faylına keçid</a>';
  }
}