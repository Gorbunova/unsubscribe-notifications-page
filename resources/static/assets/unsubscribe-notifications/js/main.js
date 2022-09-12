document.addEventListener("DOMContentLoaded", function() {
  document.querySelector('#notify_by_email').addEventListener('change', (e) => setMainSettings(e.target.checked))
  document.querySelector('#flow_change_notify').addEventListener('change', (e) => setAdditionalSettings(e.target.checked))
})

function setMainSettings(checked) {
  if (!checked) {
    document.querySelectorAll('input:not(#notify_by_email)').forEach(elem => {
      elem.disabled = true
      elem.checked = false
    })
  } else {
    document.querySelectorAll('input[type=checkbox]:not(#notify_by_email)').forEach(e => {
      e.disabled = false
      e.checked = true
    })
    document.querySelectorAll('input[type=radio]').forEach(e => {
      e.disabled = false
      if (e.id === 'any_changes') e.checked = true
    })
  }
}

function setAdditionalSettings(checked) {
  document.querySelectorAll('input[type=radio]').forEach(e => {
    e.disabled = !checked
    e.checked = checked ? e.id === 'any_changes' : checked
  })
}

function submitWithDisabledFields() {
  document.querySelector('#notify_by_email').checked = false
  setMainSettings(false)
  document.querySelector('#settings_form').submit()
}
